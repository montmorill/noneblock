import "./blocks.js";
import "./renderer.js";
import { toolbox } from "./toolbox.js";
import { NoneBlockGenerator } from "./generator.js";

const workspace = Blockly.inject("#blocklyDiv", {
  grid: { colour: "#ccc", length: 3, snap: true, spacing: 20 },
  media: "https://unpkg.com/blockly/media/",
  renderer: "noneblock_renderer",
  toolbox: toolbox,
});

workspace.addChangeListener(function (event) {
  if (event.isUiEvent) return;
  const code = NoneBlockGenerator.workspaceToCode(workspace);
  document.getElementById("codePreview").innerText = code;
});
