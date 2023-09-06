/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

//import {javascriptGenerator} from 'blockly/javascript';
const { javascriptGenerator } = require('blockly/javascript');
const fs = require('fs');

// const content = 'Some content!';





// Export all the code generators for our custom blocks,
// but don't register them with Blockly yet.
// This file has no side effects!
const generator = Object.create(null);

generator['add_text'] = function(block) {
  const text = javascriptGenerator.valueToCode(block, 'TEXT',
      javascriptGenerator.ORDER_NONE) || '\'\'';
  const color = javascriptGenerator.valueToCode(block, 'COLOR',
      javascriptGenerator.ORDER_ATOMIC) || '\'#ffffff\'';

  const addText = javascriptGenerator.provideFunction_(
      'addText',
      ['function ' + javascriptGenerator.FUNCTION_NAME_PLACEHOLDER_ +
          '(text, color) {',
      '  // Add text to the output area.',
      '  const outputDiv = document.getElementById(\'output\');',
      '  const textEl = document.createElement(\'p\');',
      '  textEl.innerText = text;',
      '  textEl.style.color = color;',
      '  outputDiv.appendChild(textEl);',
      '}']);
    // Generate the function call for this block.
  const code = `${addText}(${text}, ${color});\n`;
  return code;
};


// generator['g0'] = function(block) {
//   const x = javascriptGenerator.valueToCode(block, 'TEXT',
//       javascriptGenerator.ORDER_NONE) || '\'\'';
//   const y = javascriptGenerator.valueToCode(block, 'TEXT',
//       javascriptGenerator.ORDER_ATOMIC) || '\'\'';
//   const z = javascriptGenerator.valueToCode(block, 'TEXT',
//       javascriptGenerator.ORDER_ATOMIC) || '\'\'';

//       text = x+y+z;

//   const g0 = javascriptGenerator.provideFunction_(
//       'g0',
//       ['function ' + javascriptGenerator.FUNCTION_NAME_PLACEHOLDER_ +
//           '(text, color) {',
//       '  // Add text to the output area.',
//       '  const outputDiv = document.getElementById(\'output\');',
//       '  const textEl = document.createElement(\'p\');',
//       '  textEl.innerText = text;',
//       '  //textEl.style.color = color;',
//       '  outputDiv.appendChild(textEl);',
//       '}']);
//     // Generate the function call for this block.
//   const code = `${addText}(${text}, ${color});\n`;
//   return code;
// };

generator['test'] = function(block) {
  console.log("i have enterd the function")
  //var value_x = generator.valueToCode(block, 'X', javascriptGenerator.Order_ATOMIC);
  const value_x = javascriptGenerator.valueToCode(block, 'X',
      javascriptGenerator.ORDER_ATOMIC) || '\'0\'';

  //str = value_x.toString();
  //console.log(str);

  const test = javascriptGenerator.provideFunction_(
      'test',
      ['function ' + javascriptGenerator.FUNCTION_NAME_PLACEHOLDER_ +
          '(value_x) {',
      '  // Add text to the output area.',
      '  const outputDiv = document.getElementById(\'output\');',
      '  const textEl = document.createElement(\'p\');',
      '  textEl.innerText = value_x;',
      '  //textEl.style.color = color;',
      '  outputDiv.appendChild(textEl);',
      '}']);
    // Generate the function call for this block.
  const code = `${test}(${value_x});\n`;
  return code;
};


generator['write_file'] = function(block) {
  console.log("i have enterd the write a file function")
  var path = javascriptGenerator.valueToCode(block, 'TEXT',
      javascriptGenerator.ORDER_NONE) || 'omar';
  const content = javascriptGenerator.valueToCode(block, 'TEXT',
      javascriptGenerator.ORDER_NONE) || '\'hey\'';

  // const write_file_1 = generator.provideFunction_('write_file', `
  // function ${generator.FUNCTION_NAME_PLACEHOLDER_}() {
    
  // }
  // `);
  path = '\'' + (path + ".txt") + '\'';

  const write_file = javascriptGenerator.provideFunction_(
    'write_file',
    ['function ' + javascriptGenerator.FUNCTION_NAME_PLACEHOLDER_ +
        '(path, content) {'+
    '  fs.writeFile(path, content, err => {'+
    '  if (err) {'+
    '  console.error(err);'+
    '} '+
    '});'+
    '}'
  ]);

  

    // Generate the function call for this block.
  const code = `${write_file}(${path},${content});\n`;
  return code;
};


module.exports = {generator}