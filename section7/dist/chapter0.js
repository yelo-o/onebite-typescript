/**
 * 제네릭
 */
// 제네릭 함수
function func(value) {
    return value;
}
let num = func(10);
num.toFixed();
let bool = func(true);
let str = func("string");
let arr = func([1, 2, 3]); // number 배열
let arr2 = func([1, 2, 3]); // 튜플
export {};
