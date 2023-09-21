const fs = require('fs');
const CreateBlocks = require('./CreateBlocks.js'); 

function readAndCreateBlocksFromFile(filePath, workspace) {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const lines = fileContent.split('\n');

    let previousBlock = null;

    lines.forEach((line) => {
      const commandParts = line.split(' ');
      if (commandParts.length > 0) {
        const commandType = commandParts[0].trim();
        const params = {};

        // Extract parameters like X, Y, Z, and S from the command line
        for (let i = 1; i < commandParts.length; i++) {
          const param = commandParts[i].trim();
          const paramName = param[0];
          const paramValue = parseFloat(param.substring(1));

          params[paramName] = paramValue;
        }

        // Create Blockly block based on the command type
        let blockType = '';
        switch (commandType) {
          case 'G1':
            blockType = 'G_one'; 
            break;
        case 'G0':
            blockType = 'G_zero'; 
            break;
        case 'G4':
            blockType = 'G_four_sec'; 
            break;
          case 'M106':
            blockType = 'M_oneHunderedSix'; 
            break;
        case 'G90':
            blockType = 'G_ninety'; 
            break;
        case 'G91':
            blockType = 'G_ninetyOne'; 
            break;
         case 'G01':
            blockType = 'G_one'; 
            break;
        case 'G04':
            blockType = 'G_four_sec'; 
            break;
          
        }

        if (blockType) {
          const newBlock = CreateBlocks.addBlockToWorkspace(workspace, blockType, 0, 0);

          // Set the field values for X, Y, Z, S, etc. based on the extracted parameters
          // You need to adapt this part based on your Blockly block structure
          if (params.X !== undefined) {
            //console.log(params.X);
           // console.log(newBlock);
            const field = newBlock.getFieldValue('X');
            console.log(field);
            const num_block_x = CreateBlocks.addBlockToWorkspace(workspace, 'math_number', 0, 0);
            num_block_x.setFieldValue(params.X,'NUM');
            //newBlock.inputList[0].connect(num_block.outputConnection);
            CreateBlocks.connectToInput(newBlock,num_block_x,0);
            //newBlock.setFieldValue(params.X, "X"); 
          }
          if (params.Y !== undefined) {
            //newBlock.setFieldValue(params.Y, 'Y'); 
            const num_block_y = CreateBlocks.addBlockToWorkspace(workspace, 'math_number', 0, 0);
            num_block_y.setFieldValue(params.Y,'NUM');
            CreateBlocks.connectToInput(newBlock,num_block_y,1);
          }
          if (params.Z !== undefined) {
            //newBlock.setFieldValue(params.Z, 'Z'); 
            const num_block_z = CreateBlocks.addBlockToWorkspace(workspace, 'math_number', 0, 0);
            num_block_z.setFieldValue(params.Z,'NUM');
            CreateBlocks.connectToInput(newBlock,num_block_z,2);
          }
          if (params.P !== undefined) {
            //newBlock.setFieldValue(params.P, 'pause_per'); 
            const num_block_pause = CreateBlocks.addBlockToWorkspace(workspace, 'math_number', 0, 0);
            num_block_pause.setFieldValue(params.P,'NUM');
            CreateBlocks.connectToInput(newBlock,num_block_pause,0);
          }
          if (params.F !== undefined) {
            //newBlock.setFieldValue(params.F, 'feed_rate'); 
            const num_block_F = CreateBlocks.addBlockToWorkspace(workspace, 'math_number', 0, 0);
            num_block_F.setFieldValue(params.F,'NUM');
            CreateBlocks.connectToInput(newBlock,num_block_F,3);
          }
          if (params.S !== undefined) {
            //newBlock.setFieldValue(params.S, 'MoveAngle'); 
            const num_block_s = CreateBlocks.addBlockToWorkspace(workspace, 'math_number', 0, 0);
            num_block_s.setFieldValue(params.S,'NUM');
            CreateBlocks.connectToInput(newBlock,num_block_s,0);
          }

          // Connect the new block to the previous block
          if (previousBlock) {
            CreateBlocks.connectBlocks(previousBlock, newBlock);
          }

          // Update the previousBlock to the newly created block
          previousBlock = newBlock;
        }
      }
    });
  } catch (err) {
    console.error('Error reading or processing the file:', err);
  }
}

module.exports = {
  readAndCreateBlocksFromFile,
};
