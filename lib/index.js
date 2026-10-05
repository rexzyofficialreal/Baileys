import makeWASocket from './Socket/index.js';
import chalk from "chalk";
console.log(chalk.hex("#00c2ff")(`
 ____  _____  __  __  _____  __   __
|  _ \\| ____| \\ \\/ / |__  /  \\ \\ / /
| |_) |  _|    \\  /    / /    \\ V /
|  _ <| |___   /  \\   / /_     | |
|_| \\_\\_____| /_/\\_\\ /____|    |_|

Baileys Modification by : @RexzyOfficial
`));
export * from '../WAProto/index.js';
export * from './Utils/index.js';
export * from './Types/index.js';
export * from './Defaults/index.js';
export * from './WABinary/index.js';
export * from './WAM/index.js';
export * from './WAUSync/index.js';
export * from './Store/index.js';
export { makeWASocket };
export default makeWASocket;
//# sourceMappingURL=index.js.map
