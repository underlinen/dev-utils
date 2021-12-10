"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const print = {
    info(...args) {
        const prefix = chalk_1.default.blue(args[0]);
        args.shift();
        args.unshift(prefix);
        console.log.apply(console, args);
    },
    success(...args) {
        const prefix = chalk_1.default.green(args[0]);
        args.shift();
        args.unshift(prefix);
        console.log.apply(console, args);
    },
    warn(...args) {
        const prefix = chalk_1.default.yellow(args[0]);
        args.shift();
        args.unshift(prefix);
        console.log.apply(console, args);
    },
    error(...args) {
        const prefix = chalk_1.default.red(args[0]);
        args.shift();
        args.unshift(prefix);
        console.log.apply(console, args);
    },
};
exports.default = print;
