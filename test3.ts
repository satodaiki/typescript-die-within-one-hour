/**
 * 第三問
 * 最初の100個のフィボナッチ数のリストを計算する関数を記述せよ。
 * 定義では、フィボナッチ数列の最初の2つの数字は0と1で、次の数は前の2つの合計となる。
 * 例えば最初の10個のフィボナッチ数列は、0, 1, 1, 2, 3, 5, 8, 13, 21, 34となる。
 */
export default class Test3 {

    private static readonly FIBONACCI_FIRST_NUM: number = 0;
    private static readonly FIBONACCI_SECOND_NUM: number = 1;

    /**
     * フィボナッチ数列リストの計算処理
     * 
     * @param fibonacciCount 
     */
    public static calcFibonacci(fibonacciCount: number) {

        // フィボナッチリストの作成
        let fibonacciList: Array<number> = this.createFibonacciList(fibonacciCount);

        let sum: number = 0;
        for (let num: number of fibonacciList) {
            sum += num;
        }
    }

    private static createFibonacciList(fibonacciCount: number): Array<number> {

        let fibonacciList: Array<number> = new Array<number>()

        if (fibonacciCount < 2) {
            throw new FibonacciError('Please enter 2 or more numbers.');
        }

        fibonacciList.push(this.FIBONACCI_FIRST_NUM);
        fibonacciList.push(this.FIBONACCI_SECOND_NUM);

        for (let i: number = 0; i < fibonacciCount - 2;) {
            fibonacciList.push(fibonacciList[i], fibonacciList[++i]);
        }

        return fibonacciList;

    }

    private static fibonacci(firstNum: number, secondNum: number): number {
        return firstNum + secondNum;
    }
}

class FibonacciError implements Error {
    public name = 'FibonacciError';

    constructor(public message: string) {
    }
  
    toString() {
      return this.name + ': ' + this.message;
    }
}