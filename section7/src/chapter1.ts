/**
 * 첫번쨰 사례
 */

function swap<T, U>(a: T, b: U) {
    return [b, a];
}
const [a, b] = swap("1", 2);

/**
 * 두번째 사례
 */

function returnFirstValue<T>(data: [T, ...unknown[]]) {
    return data[0];
}

let num = returnFirstValue([0, 1, 2]);
// 0
let str = returnFirstValue(["hello", "mynameis"]);
// "hello"
let num2 = returnFirstValue([1, "hello", "mynameis"]);
// 1

/**
 * 세번쨰 사례
 */

function getLength<T extends { length: number }>(data: T) {
    return data.length;
}
let var1 = getLength([1, 2, 3]); // 3

let var2 = getLength("12345"); // 5

let var3 = getLength({ length: 10 }); // 10

// let var4 = getLength(10);

console.log(var1);
console.log(var2);
console.log(var3);
// console.log(var4);
