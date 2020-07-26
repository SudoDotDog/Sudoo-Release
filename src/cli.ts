/**
 * @author WMXPY
 * @namespace Release
 * @description CLI
 */

import { Argument, Coco, Command, Option } from "@sudoo/coco";
import * as Path from "path";

const coco = Coco.create();
coco.globalOption(Option.create('spaces').setName('spaces'));

type CommandType = {

    readonly path: string;
    readonly spaces?: string;
};

coco.command(Command.create('get').argument(Argument.create('path')).then(async (args: CommandType) => {
    const path: string = Path.resolve(args.path);
}));
