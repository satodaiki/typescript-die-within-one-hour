"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 第一問
 * forループ、whileループ、および再帰を使用して、リスト内の数字の合計を計算する3つの関数を記述せよ。
 */
var Test1 = /** @class */ (function () {
    function Test1(theNumList) {
        this.numList = theNumList;
    }
    Test1.prototype.test1For = function () {
        var sum = 0;
        for (var _i = 0, _a = this.numList; _i < _a.length; _i++) {
            var num = _a[_i];
            sum += num;
        }
        return sum;
    };
    Test1.prototype.test1While = function () {
        var sum = 0;
        var count = 0;
        while (count < this.numList.length) {
            sum += this.numList[count];
            count++;
        }
        return sum;
    };
    Test1.prototype.test1Recursive = function () {
        return this.recursive(0);
    };
    Test1.prototype.recursive = function (count) {
        if (count < this.numList.length) {
            return this.numList[count] + this.recursive(++count);
        }
        return 0;
    };
    return Test1;
}());
exports.default = Test1;
