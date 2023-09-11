/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

//import * as Blockly from 'blockly/core';
const Blockly = require('blockly/core');

// Create a custom block called 'add_text' that adds
// text to the output div on the sample app.
// This is just an example and you should replace this with your
// own custom blocks.
const addText = {
  'type': 'add_text',
  'message0': 'Add text %1 with color %2',
  'args0': [
    {
      'type': 'input_value',
      'name': 'TEXT',
      'check': 'String',
    },
    {
      'type': 'input_value',
      'name': 'COLOR',
      'check': 'Colour',
    },
  ],
  'previousStatement': null,
  'nextStatement': null,
  'colour': 160,
  'tooltip': '',
  'helpUrl': '',
};

const g0 = 
    {
        "type": "g0",
        "message0": "%1 ",
        "args0": [
          {
            "type": "input_value",
            "name": "X",
            "check": "Number"
          },
          // {
          //   "type": "input_value",
          //   "name": "Y",
          //   "check": "Number"
          // },
          // {
          //   "type": "input_value",
          //   "name": "Z",
          //   "check": "Number"
          // }
        ],
        "inputsInline": true,
        "colour": 230,
        "tooltip": "G0 gcode",
        "helpUrl": ""
      };

      const test = {
        "type": "test",
        "message0": "enter a number %1",
        "args0": [
          {
            "type": "input_value",
            "name": "X",
            "check": "Number"
          }
        ],
        "inputsInline": true,
        "colour": 180,
        "tooltip": "",
        "helpUrl": ""
      };

      const write_file = 
        {
          "type": "write_file",
          "message0": "path %1 content %2",
          "args0": [
            {
              "type": "input_value",
              "name": "PATH"
            },
            {
              "type": "input_value",
              "name": "CONTENT"
            }
          ],
          "inputsInline": true,
          "colour": 230,
          "tooltip": "",
          "helpUrl": ""
        }

        const G_zero =
        {
          "type": "G_zero",
          "message0": "Move to X %1 Y %2 Z %3",
          "args0": [
            {
              "type": "input_value",
              "name": "X",
              "check": "Number"
            },
            {
              "type": "input_value",
              "name": "Y",
              "check": "Number"
            },
            {
              "type": "input_value",
              "name": "Z",
              "check": "Number"
            }
          ],
          'previousStatement': null,
          'nextStatement': null,
          "inputsInline": true,
          "colour": 120,
          "tooltip": "",
          "helpUrl": ""
        }


        const G_one =
        {
          "type": "G_one",
          "message0": "Move Linearly to X %1 Y %2 Z %3 Feed rate %4",
          "args0": [
            {
              "type": "input_value",
              "name": "X",
              "check": "Number"
            },
            {
              "type": "input_value",
              "name": "Y",
              "check": "Number"
            },
            {
              "type": "input_value",
              "name": "Z",
              "check": "Number"
            },
            {
              "type": "input_value",
              "name": "feed_rate",
              "check": "Number",
              "min":0
            }
          ],
          'previousStatement': null,
          'nextStatement': null,
          "inputsInline": true,
          "colour": 120,
          "tooltip": "",
          "helpUrl": ""
        }
      

// Create the block definitions for the JSON-only blocks.
// This does not register their definitions with Blockly.
// This file has no side effects!
const blocks = Blockly.common.createBlockDefinitionsFromJsonArray(
    [addText,test,write_file,G_zero,G_one]);

    module.exports = {blocks};
