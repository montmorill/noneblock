import * as Blockly from "blockly";
import * as zhHans from "blockly/msg/zh-hans"

const Msg: { [key: string]: string } = {};
for (const key in zhHans) Msg[key] = zhHans[key];

Blockly.setLocale(Msg);
