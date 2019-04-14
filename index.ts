/**
 * 1時間以内に解けなければプログラマ失格となってしまう5つの問題
 * https://www.softantenna.com/wp/software/5-programming-problems/
 */
import Test1 from "./test1";
import Test2 from "./test2";
import Test3 from "./test3";

// テスト1の確認
let test1: Test1 = new Test1([1,2,3]);

console.log('test1.test1For(): ' + test1.test1For());
console.log('test1.test1While(): ' + test1.test1While());
console.log('test1.test1Recursive(): ' + test1.test1Recursive());

// テスト2の確認
console.log('test2.arrayJoinStr(): '+ Test2.arrayJoinStr([1,2,3], ['a', 'b']));

// テスト3の確認
console.log('test3.calcFibonacci(100)' + Test3.calcFibonacci(100));