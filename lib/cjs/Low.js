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
exports.Low = void 0;
const MissingAdapterError_js_1 = require("./MissingAdapterError.js");
class Low {
    constructor(adapter) {
        this.data = null;
        if (adapter) {
            this.adapter = adapter;
        }
        else {
            throw new MissingAdapterError_js_1.MissingAdapterError();
        }
    }
    read() {
        return __awaiter(this, void 0, void 0, function* () {
            this.data = yield this.adapter.read();
        });
    }
    write() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.data) {
                yield this.adapter.write(this.data);
            }
        });
    }
}
exports.Low = Low;
