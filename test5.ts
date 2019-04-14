/**
 * 第五問
 * 1,2,…,9の数をこの順序で、"+"、"-"、またはななにもせず結果が100となるあらゆる組合せを出力するプログラムを記述せよ。
 * 例えば、1 + 2 + 34 – 5 + 67 – 8 + 9 = 100となる。
 */
export default class Test5 {

    /** 使用可能演算子列挙体リスト */
    private opeList: Operator[];

    constructor(theOpeList: Operator[]) {
        this.opeList = theOpeList;
    }

    public static calcOneHundred(numList: number[]): number[] {

        for (let i: number = 0; i < numList.length; i++) {
            
        }

        return numList;
    }

    private calcOperator(numList: number[]): number[] {
        


        for (let num of numList) {
            for (let i: number = 0; i < this.opeList.length; i++) {
                
            }
        }



    }
}

/**
 * 演算子列挙体
 */
enum Operator {
    /** 加算演算子 */
    addition,
    /** 減算演算子 */
    subtraction,
    /** 乗算演算子 */
    multiplication,
    /** 除算演算子 */
    division
}