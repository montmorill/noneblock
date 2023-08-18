import * as Blockly from "blockly";
import "./msg";
import "./blocks";
import "./renderer";
import { toolbox } from "./toolbox";
import { noneblockGenerator } from "./generator";
import { toolboxCategories } from "@blockly/dev-tools";

const workspace = Blockly.inject("blocklyDiv", {
  grid: { colour: "#ebebeb", length: 3, snap: true, spacing: 20 },
  media: "./node_modules/blockly/media/",
  renderer: "noneblock_renderer",
  toolbox: toolbox,
});

workspace.addChangeListener(function (event) {
  if (event.isUiEvent) return;
  const code = noneblockGenerator.workspaceToCode(workspace);
  document.getElementById("codePreview").innerText = code;
});

for (const e of document.getElementsByClassName("blocklyToolboxCategory"))
  e.style = `padding-left: ${e.getAttribute("aria-level") - 1}em !important`;
