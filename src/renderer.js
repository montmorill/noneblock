class NoneBlcokRenderer extends Blockly.blockRendering.Renderer {
  constructor() {
    super();
  }

  makeConstants_() {
    return new NoneBlcokConstantProvider();
  }
}

class NoneBlcokConstantProvider extends Blockly.blockRendering
  .ConstantProvider {
  constructor() {
    super();
    this.NOTCH_WIDTH = 20;
    this.NOTCH_HEIGHT = 5;
    this.CORNER_RADIUS = 10;
    this.TAB_HEIGHT = 10;
    this.TAB_WIDTH = 8;
  }

  init() {
    super.init();

    const width = this.TAB_WIDTH;
    const height = this.TAB_HEIGHT;

    this.makeInputConn = (makeMainPath) => ({
      width: width,
      height: height,
      pathUp: makeMainPath(-1, width, height),
      pathDown: makeMainPath(1, width, height),
    });

    this.RECT_TAB = this.makeInputConn((dir) =>
      Blockly.utils.svgPaths.line([
        Blockly.utils.svgPaths.point(-width, 0),
        Blockly.utils.svgPaths.point(0, dir * height),
        Blockly.utils.svgPaths.point(width, 0),
      ])
    );

    this.TRI_TAB = this.makeInputConn((dir) =>
      Blockly.utils.svgPaths.line([
        Blockly.utils.svgPaths.point(-width, (dir * height) / 2),
        Blockly.utils.svgPaths.point(width, (dir * height) / 2),
      ])
    );

    this.DEFALUT_TAB = this.makeInputConn((dir) =>
      Blockly.utils.svgPaths.line([Blockly.utils.svgPaths.point(0, height)])
    );

    this.inputConns = new Map([
      ["String", this.RECT_TAB],
      ["Number", this.PUZZLE_TAB],
      ["Boolean", this.TRI_TAB],
    ]);
  }

  shapeFor(connection) {
    switch (connection.type) {
      case Blockly.INPUT_VALUE:
      case Blockly.OUTPUT_VALUE:
        let targetConnection = connection.targetConnection;
        if (targetConnection && targetConnection.getCheck())
          connection.check_ = targetConnection.getCheck();
        const checks = connection.getCheck();
        if (checks) {
          if (checks.includes("String")) return this.RECT_TAB;
          if (checks.includes("Number")) return this.PUZZLE_TAB;
          if (checks.includes("Boolean")) return this.TRI_TAB;
        }
        return this.DEFALUT_TAB;
      case Blockly.PREVIOUS_STATEMENT:
      case Blockly.NEXT_STATEMENT:
        return this.NOTCH;
      default:
        throw Error("Unknown connection type");
    }
  }
}

Blockly.blockRendering.register("noneblock_renderer", NoneBlcokRenderer);
