import * as Blockly from "blockly";
import type { Connection } from "blockly";
import type { PuzzleTab, Notch } from "blockly/core/renderers/common/constants";

class NoneBlcokRenderer extends Blockly.blockRendering.Renderer {
  constructor(name?: string) {
    super(name ?? "noneblock_renderer");
  }
  makeConstants_() {
    return new NoneBlcokConstantProvider();
  }
}

class NoneBlcokConstantProvider extends Blockly.blockRendering
  .ConstantProvider {
  [key: `${string}_TAB`]: PuzzleTab;

  constructor() {
    super();
    this.NOTCH_WIDTH = 20;
    this.NOTCH_HEIGHT = 5;
    this.CORNER_RADIUS = 10;
    this.TAB_HEIGHT = 10;
    this.TAB_WIDTH = 8;
  }
  init(): void {
    super.init();

    const width = this.TAB_WIDTH;
    const height = this.TAB_HEIGHT;

    const makeInputConn = (
      makeMainPath: (dir: number) => string
    ): PuzzleTab => ({
      type: Blockly.INPUT_VALUE | Blockly.OUTPUT_VALUE,
      width: width,
      height: height,
      pathUp: makeMainPath(-1),
      pathDown: makeMainPath(1),
    });

    this.RECT_TAB = makeInputConn((dir: number): string =>
      Blockly.utils.svgPaths.line([
        Blockly.utils.svgPaths.point(-width, 0),
        Blockly.utils.svgPaths.point(0, dir * height),
        Blockly.utils.svgPaths.point(width, 0),
      ])
    );

    this.TRI_TAB = makeInputConn((dir: number): string =>
      Blockly.utils.svgPaths.line([
        Blockly.utils.svgPaths.point(-width, (dir * height) / 2),
        Blockly.utils.svgPaths.point(width, (dir * height) / 2),
      ])
    );
  }

  shapeFor(connection: Connection): PuzzleTab | Notch {
    switch (connection.type) {
      case Blockly.INPUT_VALUE:
      case Blockly.OUTPUT_VALUE:
        // let checks = connection.getCheck();
        // if (checks) {
        //   if (checks.includes("Boolean")) return this.TRI_TAB;
        //   if (checks.includes("Number")) return this.PUZZLE_TAB;
        //   if (checks.includes("String")) return this.RECT_TAB;
        // }
        return this.PUZZLE_TAB;
      case Blockly.PREVIOUS_STATEMENT:
      case Blockly.NEXT_STATEMENT:
        return this.NOTCH;
      default:
        throw Error("Unknown connection type");
    }
  }
}

Blockly.blockRendering.register("noneblock_renderer", NoneBlcokRenderer);
