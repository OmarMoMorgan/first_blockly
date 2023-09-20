const { blocks } = require('blockly/blocks');
const { javascriptGenerator } = require('blockly/javascript');

const generator = Object.create(null);

 function Math_blocks_gen(block){
// Math operators with single operand.
const operator = block.getFieldValue('OP');
let code;
let arg;
if (operator === 'NEG') {
  // Negation is a special case given its different operator precedence.
  arg = javascriptGenerator.valueToCode(block, 'NUM',
  javascriptGenerator.ORDER_UNARY_NEGATION) || '0';
  if (arg[0] === '-') {
    // --3 is not legal in JS.
    arg = ' ' + arg;
  }
  code = '-' + arg;
  return [code, javascriptGenerator.ORDER_UNARY_NEGATION];
}
if (operator === 'SIN' || operator === 'COS' || operator === 'TAN') {
  arg = javascriptGenerator.valueToCode(block, 'NUM',
  javascriptGenerator.ORDER_DIVISION) || '0';
} else {
  arg = javascriptGenerator.valueToCode(block, 'NUM',
  javascriptGenerator.ORDER_NONE) || '0';
}
// First, handle cases which generate values that don't need parentheses
// wrapping the code.
switch (operator) {
  case 'ABS':
    code = 'abs(' + arg + ')';
    break;
  case 'ROOT':
    code = 'sqrt(' + arg + ')';
    break;
  case 'LN':
    code = 'log(' + arg + ')';
    break;
  case 'EXP':
    code = 'exp(' + arg + ')';
    break;
  case 'POW10':
    code = 'pow(10,' + arg + ')';
    break;
  case 'ROUND':
    code = 'round(' + arg + ')';
    break;
  case 'ROUNDUP':
    code = 'ceil(' + arg + ')';
    break;
  case 'ROUNDDOWN':
    code = 'floor(' + arg + ')';
    break;
  case 'SIN':
    code = 'sin(' + arg + ')';
    break;
  case 'COS':
    code = 'cos(' + arg + ')';
    break;
  case 'TAN':
    code = 'tan(' + arg + ' )';
    break;
}
if (code) {
  return [code, javascriptGenerator.FUNCTION_CALL];
}
// Second, handle cases which generate values that may need parentheses
// wrapping the code.
switch (operator) {
  case 'LOG10':
    code = 'log(' + arg + ') / log(10)';
    break;
  case 'ASIN':
    code = 'asin(' + arg + ')';
    break;
  case 'ACOS':
    code = 'acos(' + arg + ')';
    break;
  case 'ATAN':
    code = 'atan(' + arg + ')';
    break;
  default:
    throw Error('Unknown math operator: ' + operator);
}
return [code, javascriptGenerator.ORDER_DIVISION];
}



generator['math_trig_cst'] = Math_blocks_gen//function(block){
//     const operator = block.getFieldValue('OP');
//     let code;
//     let arg;
//     if (operator === 'SIN' || operator === 'COS' || operator === 'TAN') {
//         arg = javascriptGenerator.valueToCode(block, 'NUM',
//         javascriptGenerator.ORDER_DIVISION) || '0';}
//     //   } else {
//     //     arg = javascriptGenerator.valueToCode(block, 'NUM',
//     //     javascriptGenerator.NONE) || '0';
//     //   }

//     switch (operator) {
//         case 'SIN':
//     code = 'sin(' + arg + ')';
//     break;
//   case 'COS':
//     code = 'cos(' + arg + ')';
//     break;
//   case 'TAN':
//     code = 'tan(' + arg + ')';
//     break;
//     }
//     if (code) {
//         return [code, javascriptGenerator.FUNCTION_CALL];
//       }

//       switch (operator) {
//         case 'ASIN':
//           code = 'Math.asin(' + arg + ')';
//           break;
//         case 'ACOS':
//           code = 'Math.acos(' + arg + ')';
//           break;
//         case 'ATAN':
//           code = 'Math.atan(' + arg + ')';
//           break;
//         default:
//           throw Error('Unknown math operator: ' + operator);
//       }
//       return [code, javascriptGenerator.ORDER_DIVISION];
//}

generator['math_round_cst'] = Math_blocks_gen;
    

generator['math_single_cst'] = Math_blocks_gen;

generator['math_constant_cst'] = function(block){
    // Constants: PI, E, the Golden Ratio, sqrt(2), 1/sqrt(2), INFINITY.
  const CONSTANTS = {
    'PI': ['M_PI', javascriptGenerator.MEMBER],
    'E': ['M_E', javascriptGenerator.MEMBER],
    'GOLDEN_RATIO': ['(1 + sqrt(5)) / 2', javascriptGenerator.DIVISION],
    'SQRT2': ['sqrt(2)', javascriptGenerator.MEMBER],
    'SQRT1_2': ['sqrt(1/2)', javascriptGenerator.MEMBER],
    'INFINITY': ['HUGE_VAL', javascriptGenerator.ATOMIC],
  };
  return CONSTANTS[block.getFieldValue('CONSTANT')];
}


generator['BaseAngle'] = function(block){
    const R_var = javascriptGenerator.valueToCode(block, 'MotorValue',
    javascriptGenerator.ORDER_ASSIGNMENT) || '\'0\'';

    // const G_zero = javascriptGenerator.provideFunction_(
    //     'G_zero',
    //     ['function ' + javascriptGenerator.FUNCTION_NAME_PLACEHOLDER_ +
    //         '(X,Y,Z) {',
    //         'data_gZero = `G0 X${X} Y${Y} Z${Z}`;',
    //         'writeSerialPortSimple(port,data_gZero);',
    //         '}'
    //       ]
    //   )
  
      // Generate the function call for this block.
      const code = `Base = ${R_var};\n`;
      return code;
}

generator['ShoulderAngle'] = function(block){
    const H_var = javascriptGenerator.valueToCode(block, 'MotorValue',
    javascriptGenerator.ORDER_ASSIGNMENT) || '\'0\'';

  
      // Generate the function call for this block.
      const code = `Shoulder = ${H_var};\n`;
      return code;
}

generator['ElbowAngle'] = function(block){
    const A_var = javascriptGenerator.valueToCode(block, 'MotorValue',
    javascriptGenerator.ORDER_ASSIGNMENT) || '\'0\'';

  
      // Generate the function call for this block.
      const code = `Elbow = ${A_var};\n`;
      return code;
}

generator['getRvalue'] = function(block){
    const code = 'R';
    return [code,javascriptGenerator.ORDER_ATOMIC];
}

generator['getHvalue'] = function(block){
    const code = 'H';
    return [code,javascriptGenerator.ORDER_ATOMIC];
}

generator['getAvalue'] = function(block){
    const code = 'A';
    return [code,javascriptGenerator.ORDER_ATOMIC];
}

module.exports = {generator}