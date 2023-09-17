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
const {listSerialPorts} = require("./util/listSerialPorts");

// Register the blocks and generator with Blockly
Blockly.common.defineBlocks(blocks);
Object.assign(javascriptGenerator, generator);

// Set up UI elements and inject Blockly
const codeDiv = document.getElementById('generatedCode').firstChild;
const outputDiv = document.getElementById('output');
const blocklyDiv = document.getElementById('blocklyDiv');
const run_btn = document.getElementById('run_btn');
const Board_port = document.getElementById('Board_port');

var port;
var lastPort ="";

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
load(ws);
//runCode();

//here we are making the new port
//port = makeSerialPort();

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

Board_port.addEventListener('click',()=>{
  // ports = listSerialPorts();
  // console.log("ports from index" , ports);
  //boardsReady = [];
  listSerialPorts()
    .then(ports => {
        // Use the 'ports' array here
        console.log("Received ports", ports);
        //boardsReady = ports.map((port)=>{
          //port.path;
          //console.log(boardsReady);
        //})
        while (Board_port.options.length > 0) {
          Board_port.remove(0);
      }
        for(var i = 0; i < ports.length; i++) {
          var opt = ports[i];
      
          var el = document.createElement("option");
          el.text = opt;
          el.value = opt;
      
          Board_port.add(el);
        }
    })
    
    lastPort = Board_port.value;
    if(!port && lastPort != ""){
      port = makeSerialPort(Board_port.value);
    }
    // Manually trigger the change event
//     if(newPort === 0){
//       const event = new Event('change', {
//       bubbles: true,
//       cancelable: true,
//     });
//     Board_port.dispatchEvent(event);
//     newPort =1;
// }
    
})


// Board_port.addEventListener('input',()=>{
//     port = makeSerialPort(Board_port.value);
// })