// void
// void -> 공허 -> 아무것도 없다.
// void -> 아무것도 없음을 의미하는 타입
function func1() {
    return "hello";
}
function func2() {
    console.log("hello");
}
let a;
// a = 1;
// a= "hello";
// a = {};
a = undefined; // undefiend 이외의 다른 타입의 값은 담을 수 없음
// a = null; // --strictNullChecks 옵션을 켜야만 null과 undefined를 할당할 수 있다.
// never
// never -> 존재하지 않는
// 불가능한 타입
// function func3(): void {
function func3() {
    while (true) { }
}
function func4() {
    throw new Error();
}
let anyVar;
let b;
export {};
// b = 1; // ne
