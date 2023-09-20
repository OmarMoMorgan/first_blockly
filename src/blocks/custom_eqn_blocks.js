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

        const G_four_sec =
        {
          "type": "G_four_sec",
          "message0": "pause for %1 seconds",
          "args0": [
            {
              "type": "input_value",
              "name": "pause_per",
              "check": "Number"
            },
          ],
          'previousStatement': null,
          'nextStatement': null,
          "inputsInline": true,
          "colour": 120,
          "tooltip": "",
          "helpUrl": ""
        }

        const math_single_cst = {
            'type': 'math_single_cst',
            'message0': '%1 %2',
            'args0': [
              {
                'type': 'field_dropdown',
                'name': 'OP',
                'options': [
                  ['%{BKY_MATH_SINGLE_OP_ROOT}', 'ROOT'],
                  ['%{BKY_MATH_SINGLE_OP_ABSOLUTE}', 'ABS'],
                  ['-', 'NEG'],
                  ['ln', 'LN'],
                  ['log10', 'LOG10'],
                  ['e^', 'EXP'],
                  ['10^', 'POW10'],
                ],
              },
              {
                'type': 'input_value',
                'name': 'NUM',
                'check': 'Number',
              },
            ],
            'output': 'Number',
            'style': 'math_blocks',
            'helpUrl': '%{BKY_MATH_SINGLE_HELPURL}',
            'extensions': ['math_op_tooltip'],
          }
        

        const math_trig_cst = {
            'type': 'math_trig_cst',
            'message0': '%1 %2',
            'args0': [
              {
                'type': 'field_dropdown',
                'name': 'OP',
                'options': [
                  ['%{BKY_MATH_TRIG_SIN}', 'SIN'],
                  ['%{BKY_MATH_TRIG_COS}', 'COS'],
                  ['%{BKY_MATH_TRIG_TAN}', 'TAN'],
                  ['%{BKY_MATH_TRIG_ASIN}', 'ASIN'],
                  ['%{BKY_MATH_TRIG_ACOS}', 'ACOS'],
                  ['%{BKY_MATH_TRIG_ATAN}', 'ATAN'],
                ],
              },
              {
                'type': 'input_value',
                'name': 'NUM',
                'check': 'Number',
              },
            ],
            'output': 'Number',
            'style': 'math_blocks',
            'helpUrl': '%{BKY_MATH_TRIG_HELPURL}',
            'extensions': ['math_op_tooltip'],
          }
  

          const math_constant_cst = {
            'type': 'math_constant_cst',
            'message0': '%1',
            'args0': [
              {
                'type': 'field_dropdown',
                'name': 'CONSTANT',
                'options': [
                  ['\u03c0', 'PI'],
                  ['e', 'E'],
                  ['\u03c6', 'GOLDEN_RATIO'],
                  ['sqrt(2)', 'SQRT2'],
                  ['sqrt(\u00bd)', 'SQRT1_2'],
                  ['\u221e', 'INFINITY'],
                ],
              },
            ],
            'output': 'Number',
            'style': 'math_blocks',
            'tooltip': '%{BKY_MATH_CONSTANT_TOOLTIP}',
            'helpUrl': '%{BKY_MATH_CONSTANT_HELPURL}',
          }

          const math_round_cst = {
            'type': 'math_round_cst',
            'message0': '%1 %2',
            'args0': [
              {
                'type': 'field_dropdown',
                'name': 'OP',
                'options': [
                  ['%{BKY_MATH_ROUND_OPERATOR_ROUND}', 'ROUND'],
                  ['%{BKY_MATH_ROUND_OPERATOR_ROUNDUP}', 'ROUNDUP'],
                  ['%{BKY_MATH_ROUND_OPERATOR_ROUNDDOWN}', 'ROUNDDOWN'],
                ],
              },
              {
                'type': 'input_value',
                'name': 'NUM',
                'check': 'Number',
              },
            ],
            'output': 'Number',
            'style': 'math_blocks',
            'helpUrl': '%{BKY_MATH_ROUND_HELPURL}',
            'tooltip': '%{BKY_MATH_ROUND_TOOLTIP}',
          }

          const BaseAngle =
        {
            "type": "BaseAngle",
            "message0": "value for base motor %1",
            "args0": [
              {
                "type": "input_value",
                "name": "MotorValue",
                "check": "Number"
              },
            ],
            'deletable': false,
            'previousStatement': null,
            'nextStatement': null,
            "inputsInline": true,
            "colour": 120,
            "tooltip": "",
            "helpUrl": ""
        }

        const ShoulderAngle =
        {
          "type": "ShoulderAngle",
          "message0": "Value for Shoulder motor %1",
          "args0": [
            {
              "type": "input_value",
              "name": "MotorValue",
              "check": "Number"
            },
          ],
          'deletable': false,
          'previousStatement': null,
          'nextStatement': null,
          "inputsInline": true,
          "colour": 120,
          "tooltip": "",
          "helpUrl": ""
        }

        const ElbowAngle =
        {
          "type": "ElbowAngle",
          "message0": "Value for Elbow Motor %1",
          "args0": [
            {
              "type": "input_value",
              "name": "MotorValue",
              "check": "Number"
            },
          ],
          'deletable': false,
          'previousStatement': null,
          'nextStatement': null,
          "inputsInline": true,
          "colour": 120,
          "tooltip": "",
          "helpUrl": ""
        }

        const getRvalue = {
            'type': 'getRvalue',
            'message0': 'R value',
            'args0': [
              
            ],
            'output': null,
            "colour": 120,
            'helpUrl': '',
            'tooltip': '',
            
          }

          const getHvalue = {
            'type': 'getHvalue',
            'message0': 'H value',
            'args0': [
              
            ],
            'output': null,
            "colour": 120,
            'helpUrl': '',
            'tooltip': '',
            
          }

          const getAvalue = {
            'type': 'getAvalue',
            'message0': 'A value',
            'args0': [
              
            ],
            'output': null,
            "colour": 120,
            'helpUrl': '',
            'tooltip': '',
            
          }
      
// Create the block definitions for the JSON-only blocks.
// This does not register their definitions with Blockly.
// This file has no side effects!
const blocks = Blockly.common.createBlockDefinitionsFromJsonArray(
    [math_trig_cst,math_single_cst,math_constant_cst,math_round_cst,BaseAngle,ShoulderAngle,ElbowAngle,getRvalue,getHvalue,getAvalue]);




module.exports = {blocks};
