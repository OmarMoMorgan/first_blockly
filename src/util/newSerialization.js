const Blockly = require('blockly/core');
const fs = require('fs');
const path = require('path'); // Import the path module

// Create file paths relative to the script's location
const saveFilePath = path.join(__dirname, '../Saved_Workspaces/DefaultCustomEqnWS.txt');
const loadFilePath = path.join(__dirname, '../Saved_Workspaces/DefaultCustomEqnWS.txt');

/**
 * Saves the state of the workspace to a text file.
 * @param {Blockly.Workspace} workspace Blockly workspace to save.
 */
const save = function(workspace) {
  const data = Blockly.serialization.workspaces.save(workspace);
  fs.writeFileSync(saveFilePath, JSON.stringify(data));
};

/**
 * Loads saved state from a text file into the given workspace.
 * @param {Blockly.Workspace} workspace Blockly workspace to load into.
 */
const load = function(workspace) {
  try {
    const data = fs.readFileSync(loadFilePath, 'utf-8');
    Blockly.Events.disable();
    Blockly.serialization.workspaces.load(JSON.parse(data), workspace, false);
    Blockly.Events.enable();
  } catch (error) {
    console.error('Error loading workspace:', error);
  }
};

module.exports = { save, load };
