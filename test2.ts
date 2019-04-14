/**
 * 第二問
 * 交互に要素を取ることで、2つのリストを結合する関数を記述せよ。
 * 例えば [a, b, c]と[1, 2, 3]という2つのリストを与えると、関数は [a, 1, b, 2, c, 3]を返す。
 */
export default class Test2 {

    public static arrayJoinStr(testArray1: any[], testArray2: any[]): string {
        let joinStr: string = '';

        let count: number = 0;
        while(true) {
            let testArray1Status: boolean = true;
            let testArray2Status: boolean = true;
            
            if (count < testArray1.length) {
                joinStr = joinStr + String(testArray1[count]);
                testArray1Status = false;
            }

            if (count < testArray2.length){
                joinStr = joinStr + String(testArray2[count]);
                testArray2Status = false;
            }
            
            if (testArray1Status && testArray2Status) break;

            count++;
        }

        return joinStr;
    }
}