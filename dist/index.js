"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 1時間以内に解けなければプログラマ失格となってしまう5つの問題
 * https://www.softantenna.com/wp/software/5-programming-problems/
 */
var test1_1 = __importDefault(require("./test1"));
var test2_1 = __importDefault(require("./test2"));
// テスト1の確認
var test1 = new test1_1.default([1, 2, 3]);
console.log('test1.test1For(): ' + test1.test1For());
console.log('test1.test1While(): ' + test1.test1While());
console.log('test1.test1Recursive(): ' + test1.test1Recursive());
// テスト2の確認
console.log('test2.arrayJoinStr(): ' + test2_1.default.arrayJoinStr([1, 2, 3], ['a', 'b']));
