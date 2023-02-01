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
const main_1 = require("./main");
describe('isPositive()', () => {
    it('should return true when n > 0', () => __awaiter(void 0, void 0, void 0, function* () {
        expect((0, main_1.isPositive)(1)).toBe(true);
        expect((0, main_1.isPositive)(2)).toBe(true);
        expect((0, main_1.isPositive)(3)).toBe(true);
    }));
    it('should return true when n = 0', () => __awaiter(void 0, void 0, void 0, function* () {
        expect((0, main_1.isPositive)(0)).toBe(false);
    }));
    it('should return true when n < 0', () => __awaiter(void 0, void 0, void 0, function* () {
        expect((0, main_1.isPositive)(-1)).toBe(false);
        expect((0, main_1.isPositive)(-2)).toBe(false);
        expect((0, main_1.isPositive)(-3)).toBe(false);
    }));
});
