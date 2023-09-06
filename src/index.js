/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

// import * as Blockly from 'blockly';
// import {blocks} from './blocks/text';
// import {generator} from './generators/javascript';
// import {javascriptGenerator} from 'blockly/javascript';
// import {save, load} from './serialization';
// import {toolbox} from './toolbox';
// import './index.css';
const Blockly = require('blockly');
const { blocks } = require('./blocks/text');
const { generator } = require('./generators/javascript');
const {javascriptGenerator} = require('blockly/javascript');
const { save, load } = require('./serialization');
const { toolbox } = require('./toolbox');
const fs = require('fs');
const {makeSerialPort , writeSerialPortSimple} = require("./util/Sender")

// Register the blocks and generator with Blockly
Blockly.common.defineBlocks(blocks);
Object.assign(javascriptGenerator, generator);

// Set up UI elements and inject Blockly
const codeDiv = document.getElementById('generatedCode').firstChild;
const outputDiv = document.getElementById('output');
const blocklyDiv = document.getElementById('blocklyDiv');
const run_btn = document.getElementById('run_btn');

// var coloursFlyoutCallback = function(ws) {
//   // Returns an array of hex colours, e.g. ['#4286f4', '#ef0447']
//   var colourList = getPalette();
//   var blockList = [];
//   for (var i = 0; i < colourList.length; i++) {
//     blockList.push({
//       'kind': 'block',
//       'type': 'colour_picker',
//       'fields': {
//         'COLOUR': colourList[i]
//       }
//     });
//   }
//   return blockList;
// };

// // Associates the function with the string 'COLOUR_PALETTE'
// ws.registerToolboxCategoryCallback(
//    'COLOUR_PALETTE', coloursFlyoutCallback);

const ws = Blockly.inject(blocklyDiv, {toolbox});

// This function resets the code and output divs, shows the
// generated code from the workspace, and evals the code.
// In a real application, you probably shouldn't use `eval`.
const runCode = () => {
  const code = javascriptGenerator.workspaceToCode(ws);
  codeDiv.innerText = code;

  outputDiv.innerHTML = '';

  eval(code);
};

// Load the initial state from storage and run the code.
//load(ws);
//runCode();

//here we are making the new port
port = makeSerialPort();

// Every time the workspace changes state, save the changes to storage.
ws.addChangeListener((e) => {
  // UI events are things like scrolling, zooming, etc.
  // No need to save after one of these.
  if (e.isUiEvent) return;
  save(ws);
});


// Whenever the workspace changes meaningfully, run the code again.
ws.addChangeListener((e) => {
  // Don't run the code when the workspace finishes loading; we're
  // already running it once when the application starts.
  // Don't run the code during drags; we might have invalid state.
  if (e.isUiEvent || e.type == Blockly.Events.FINISHED_LOADING ||
    ws.isDragging()) {
    return;
  }
  //runCode();
});

run_btn.addEventListener('click',()=>{
  runCode();
})


