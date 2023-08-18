import * as Blockly from "blockly";
import * as BlockDynamicConnection from "@blockly/block-dynamic-connection";

BlockDynamicConnection.overrideOldBlockDefinitions();

const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([]);

Blockly.common.defineBlocks(blocks);
