/**
 * 第四問
 * 正の整数のリストを与えられたとき、数を並び替えて可能な最大数を返す関数を記述せよ。
 * 例えば、[50, 2, 1, 9]が与えられた時、95021が答えとなる。
 */
export default class Test4 {

    /** 空文字定数 */
    private static readonly EMPTY_STRING = '';

    public static calcListMaxNum(numList: number[]): number {
        let maxNum: number = 0;

        // 数値の入れ替えを実施
        for (let i: number = 0; i < numList.length; i++) {
            for (let l: number = i; l < numList.length; l++) {
                let tempNumList: number[] = numList;
                let tempNum = tempNumList[i];
                tempNumList[i] =  tempNumList[l];
                tempNumList[l] = tempNum;

                let resultNum: number = Number(tempNumList.join(this.EMPTY_STRING));
                if (maxNum < resultNum) maxNum = resultNum;
            }
        }

        return maxNum;
    }
}