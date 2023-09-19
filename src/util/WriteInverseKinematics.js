const fs = require('fs');
const path = require('path');


function WriteKinematicsFile(content) {
    // Define the word you want to replace
    const wordToReplace = "var ";

    // Create a regular expression that matches the word when it ends with a space
    const regex = new RegExp(`\\b${wordToReplace}\\b`, 'g');

    // Replace the word with the new word
    const replacedString = content.replace(regex, "double");


    //replacing the variables that should be at the beigning of the file
    const linesToRemove = [];
    const linesToKeep = [];

    // Split the input string into lines
    const lines = replacedString.split('\n');

    // Loop through each line and determine whether to keep or remove it
    for (const line of lines) {
        if (line.startsWith('double BackArm_mm')||
        line.startsWith('double ForeArm_mm')||
        line.startsWith('double d_Min')||
        line.startsWith('double d_Max')||
        line.startsWith('double R_offset_mm')) {
            // If the line starts with the pattern, add it to the linesToRemove array
            linesToRemove.push(line);
        } else {
            // Otherwise, add it to the linesToKeep array
            linesToKeep.push(line);
        }
    }
    // Join the linesToKeep array into a single string
    const modifiedString = linesToKeep.join('\n');

    // Join the linesToRemove array into another single string
    const removedLinesString = linesToRemove.join('\n');

    console.log('Modified String:');
    console.log(modifiedString);

    console.log('\nRemoved Lines:');
    console.log(removedLinesString);

    const functionHeader = `int InverseKinematicsTransform (double R, double H, double A, double &Shoulder, double &Elbow, double &Base){\n`;
    const functionbottom = `  return 0;\n}\n`;
    const functionDeclare = `int InverseKinematicsTransform (double R, double H, double A, double &Shoulder, double &Elbow, double &Base);\n`;


    const buttomFile = `//Function to transform XYZ(Cartesian ) to RHA (Polar) \n
    int C2P (double x, double y, double z, double &R, double &H, double &A){ \n
      H=z; \n
      if (y<0) { \n
        return 1; \n
      } \n
      R=sqrt(x*x+y*y); \n
      if (x==0) { \n
        A=90; \n
      }else if (x>0){ \n
        A=atan(y/x)*180/M_PI; \n
      }else { \n
        // the case of x<0 \n
        A=180+atan(y/x)*180/M_PI; \n
      } \n
      return 0; \n
    } \n`

    const the_final_code = functionDeclare + removedLinesString + functionHeader + modifiedString + functionbottom + buttomFile;

    
    const Filepath = "./Arduino_code/CoordinateControl.h";//path.join(__dirname, '..','Arduino_code','CoordinateControl.h');
    //"./Arduino_code/CoordinateControl.h";

    fs.writeFile(Filepath,the_final_code,err => {
        if (err) {
          console.error(err);
        }
    });
}

module.exports = {WriteKinematicsFile}