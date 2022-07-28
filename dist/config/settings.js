'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HOST = exports.PORT = exports.PROTO = exports.APP_NAME = void 0;
const normalize_port_1 = __importDefault(require("normalize-port"));
/** Settings **/
/** app **/
exports.APP_NAME = process.env.APP_NAME || 'project';
/** http **/
exports.PROTO = process.env.PROTO || 'http';
exports.PORT = (0, normalize_port_1.default)(process.env.PORT || 3000);
exports.HOST = process.env.HOST || 'localhost';
//# sourceMappingURL=settings.js.map