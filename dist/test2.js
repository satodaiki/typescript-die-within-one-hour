"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 第二問
 * 交互に要素を取ることで、2つのリストを結合する関数を記述せよ。
 * 例えば [a, b, c]と[1, 2, 3]という2つのリストを与えると、関数は [a, 1, b, 2, c, 3]を返す。
 */
var Test2 = /** @class */ (function () {
    function Test2() {
    }
    Test2.arrayJoinStr = function (testArray1, testArray2) {
        var joinStr = '';
        var count = 0;
        while (true) {
            var testArray1Status = true;
            var testArray2Status = true;
            if (count < testArray1.length) {
                joinStr = joinStr + String(testArray1[count]);
                testArray1Status = false;
            }
            if (count < testArray2.length) {
                joinStr = joinStr + String(testArray2[count]);
                testArray2Status = false;
            }
            if (testArray1Status && testArray2Status)
                break;
            count++;
        }
        return joinStr;
    };
    return Test2;
}());
exports.default = Test2;
