'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const settings_1 = require("./config/settings");
const app_1 = __importDefault(require("./app"));
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer(app_1.default);
server.listen(settings_1.PORT, () => {
    console.log(`${settings_1.APP_NAME}-api listening on: ${settings_1.PROTO}://${settings_1.HOST}:${settings_1.PORT}`);
});
//# sourceMappingURL=server.js.map