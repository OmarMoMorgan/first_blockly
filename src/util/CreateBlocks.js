// blocklyHelper.js

// Import the Blockly library if needed
const Blockly = require('blockly');

// Function to add a block to the workspace
function addBlockToWorkspace(workspace, blockType, positionX, positionY) {
  const newBlock = workspace.newBlock(blockType);
  newBlock.initSvg();
  newBlock.render();
  workspace.getCanvas().appendChild(newBlock.getSvgRoot());
  //workspace.moveBlockBy(newBlock, positionX, positionY);
  return newBlock;
}

// Function to connect two blocks
function connectBlocks(previousBlock, nextBlock) {
  // const previousOutput = previousBlock.outputConnection;
  // const nextInput = nextBlock.inputList[0].connection;
  // previousOutput.connect(nextInput);
  previousBlock.nextConnection.connect(nextBlock.previousConnection);
}

function connectToInput(parentBlock,childBlock,fieldNum){
  const fieldInput = parentBlock.inputList[fieldNum].connection;
  const OutConnect = childBlock.outputConnection;
  fieldInput.connect(OutConnect);
}

// Export the functions
module.exports = {
  addBlockToWorkspace,
  connectBlocks,
  connectToInput,
};
