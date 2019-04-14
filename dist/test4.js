"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 第四問
 * 正の整数のリストを与えられたとき、数を並び替えて可能な最大数を返す関数を記述せよ。
 * 例えば、[50, 2, 1, 9]が与えられた時、95021が答えとなる(解答例)。
 */
var Test4 = /** @class */ (function () {
    function Test4() {
    }
    Test4.calcListMaxNum = function (numList) {
        var maxNum = 0;
        // 数値の入れ替えを実施
        for (var i = 0; i < numList.length; i++) {
            for (var l = i; l < numList.length; l++) {
                var tempNumList = numList;
                var tempNum = tempNumList[i];
                tempNumList[i] = tempNumList[l];
                tempNumList[l] = tempNum;
                var resultNum = Number(tempNumList.join(this.EMPTY_STRING));
                if (maxNum < resultNum)
                    maxNum = resultNum;
            }
        }
        return maxNum;
    };
    /** 空文字定数 */
    Test4.EMPTY_STRING = '';
    return Test4;
}());
exports.default = Test4;
