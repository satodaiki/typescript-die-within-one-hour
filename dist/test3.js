"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 第三問
 * 最初の100個のフィボナッチ数のリストを計算する関数を記述せよ。
 * 定義では、フィボナッチ数列の最初の2つの数字は0と1で、次の数は前の2つの合計となる。
 * 例えば最初の10個のフィボナッチ数列は、0, 1, 1, 2, 3, 5, 8, 13, 21, 34となる。
 */
var Test3 = /** @class */ (function () {
    function Test3() {
    }
    /**
     * フィボナッチ数列リストの計算処理
     *
     * @param fibonacciCount - 作成するフィボナッチ数列リストのカウント
     */
    Test3.calcFibonacci = function (fibonacciCount) {
        // フィボナッチリストの作成
        var fibonacciList = this.createFibonacciList(fibonacciCount);
        var sum = 0;
        for (var _i = 0, fibonacciList_1 = fibonacciList; _i < fibonacciList_1.length; _i++) {
            var num = fibonacciList_1[_i];
            sum += num;
        }
        return sum;
    };
    /**
     * フィボナッチ数列リストの作成
     *
     * @param fibonacciCount - 作成するフィボナッチ数列リストのカウント
     */
    Test3.createFibonacciList = function (fibonacciCount) {
        var fibonacciList = new Array();
        if (fibonacciCount < 2) {
            throw new FibonacciError('Please enter 2 or more numbers.');
        }
        fibonacciList.push(this.FIBONACCI_FIRST_NUM);
        fibonacciList.push(this.FIBONACCI_SECOND_NUM);
        for (var i = 0; i < fibonacciCount - 2;) {
            fibonacciList.push(fibonacciList[i], fibonacciList[++i]);
        }
        return fibonacciList;
    };
    Test3.fibonacci = function (firstNum, secondNum) {
        return firstNum + secondNum;
    };
    Test3.FIBONACCI_FIRST_NUM = 0;
    Test3.FIBONACCI_SECOND_NUM = 1;
    return Test3;
}());
exports.default = Test3;
var FibonacciError = /** @class */ (function () {
    function FibonacciError(message) {
        this.message = message;
        this.name = 'FibonacciError';
    }
    FibonacciError.prototype.toString = function () {
        return this.name + ': ' + this.message;
    };
    return FibonacciError;
}());
