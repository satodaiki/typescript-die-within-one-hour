/**
 * 第一問
 * forループ、whileループ、および再帰を使用して、リスト内の数字の合計を計算する3つの関数を記述せよ。
 */
export default class Test1 {
    private numList: number[];

    public constructor(theNumList: number[]) {
        this.numList = theNumList;
    }

    public test1For(): number {

        let sum: number = 0;

        for (let num of this.numList) {
            sum += num;
        }
        return sum;
    }

    public test1While(): number {
        let sum: number = 0;

        let count: number = 0;
        while(count < this.numList.length) {
            sum += this.numList[count];
            count++;
        }

        return sum;
    }

    public test1Recursive(): number {
        return this.recursive(0);
    }

    private recursive(count: number): number {
        if (count < this.numList.length) {
            return this.numList[count] + this.recursive(++count);
        }
        return 0;
    }
}