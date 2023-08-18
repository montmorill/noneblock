import type { ToolboxDefinition } from "blockly/core/utils/toolbox";

export const toolbox: ToolboxDefinition = {
  kind: "categoryToolbox",
  contents: [
    {
      kind: "category",
      name: "基本",
      contents: [
        {
          kind: "category",
          name: "控制",
          contents: [
            {
              kind: "block",
              type: "controls_repeat_ext",
              inputs: {
                TIMES: { shadow: { type: "math_number", fields: { NUM: 10 } } },
              },
            },
            { kind: "block", type: "controls_whileUntil" },
            {
              kind: "block",
              type: "controls_for",
              inputs: {
                FROM: { shadow: { type: "math_number" } },
                TO: { shadow: { type: "math_number", fields: { NUM: 10 } } },
                BY: { shadow: { type: "math_number", fields: { NUM: 1 } } },
              },
            },
            { kind: "block", type: "controls_forEach" },
            { kind: "block", type: "controls_flow_statements" },
          ],
        },
        {
          kind: "category",
          name: "颜色",
          contents: [
            { kind: "block", type: "colour_picker" },
            { kind: "block", type: "colour_random" },
            { kind: "block", type: "colour_rgb" },
            { kind: "block", type: "colour_blend" },
          ],
        },
        {
          kind: "category",
          name: "逻辑",
          contents: [
            { kind: "block", type: "controls_if" },
            { kind: "block", type: "logic_compare" },
            { kind: "block", type: "logic_operation" },
            { kind: "block", type: "logic_negate" },
            { kind: "block", type: "logic_boolean" },
            { kind: "block", type: "logic_null" },
            { kind: "block", type: "logic_ternary" },
          ],
        },
        {
          kind: "category",
          name: "数值",
          contents: [
            { kind: "block", type: "math_number" },
            { kind: "block", type: "math_single" },
            { kind: "block", type: "math_trig" },
            { kind: "block", type: "math_constant" },
            { kind: "block", type: "math_number_property" },
            { kind: "block", type: "math_round" },
            { kind: "block", type: "math_on_list" },
            { kind: "block", type: "math_modulo" },
            { kind: "block", type: "math_constrain" },
            { kind: "block", type: "math_random_int" },
            { kind: "block", type: "math_random_float" },
            { kind: "block", type: "math_atan2" },
          ],
        },
        {
          kind: "category",
          name: "文本",
          contents: [
            { kind: "block", type: "text" },
            { kind: "block", type: "text_multiline" },
            { kind: "block", type: "text_join" },
            { kind: "block", type: "text_append" },
            { kind: "block", type: "text_getSubstring" },
            { kind: "block", type: "text_charAt" },
          ],
        },
        {
          kind: "category",
          name: "列表",
          contents: [
            { kind: "block", type: "lists_create_empty" },
            { kind: "block", type: "lists_repeat" },
            { kind: "block", type: "lists_reverse" },
            { kind: "block", type: "lists_isEmpty" },
            { kind: "block", type: "lists_length" },
          ],
        },
        {
          kind: "category",
          name: "变量",
          contents: [
            { kind: "block", type: "variables_get" },
            { kind: "block", type: "variables_set" },
            { kind: "block", type: "math_change" },
          ],
        },
        {
          kind: "category",
          name: "函数",
          contents: [
            { kind: "block", type: "procedures_defreturn" },
            { kind: "block", type: "procedures_callreturn" },
            { kind: "block", type: "procedures_callnoreturn" },
            { kind: "block", type: "procedures_ifreturn" },
          ],
        },
      ],
    },
  ],
};
