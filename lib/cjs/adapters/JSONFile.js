"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSONFile = void 0;
const TextFile_js_1 = require("./TextFile.js");
class JSONFile {
    constructor(filename) {
        this.adapter = new TextFile_js_1.TextFile(filename);
    }
    read() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.adapter.read();
            if (data === null) {
                return null;
            }
            else {
                return JSON.parse(data);
            }
        });
    }
    write(obj) {
        return this.adapter.write(JSON.stringify(obj, null, 2));
    }
}
exports.JSONFile = JSONFile;
