import type { CodeGenerator } from "blockly";
import { pythonGenerator } from "blockly/python";

export const noneblockGenerator: CodeGenerator = pythonGenerator;

noneblockGenerator.INDENT = " ".repeat(4);

Object.assign(noneblockGenerator.forBlock);
