/**
 * Unknow 타입
 */
function unknownExam() {
    // 업 캐스팅
    let a = 1;
    let b = "hello";
    let c = true;
    let d = null;
    let e = undefined;
    let unknownVar;
    // 다운캐스팅
    // let num: number = unknownVar;
    // let str: string = unknownVar;
    // let bool: boolean = unknownVar;
}
/**
 * Never 타입
 */
function neverExam() {
    function neverFunc() {
        while (true) { }
    }
    let num = neverFunc();
    let str = neverFunc();
    let bool = neverFunc();
    // 다운캐스팅
    // let never1: never = 10;
    // let never2: never = "string";
    // let never3: never = true;
}
/**
 * Void 타입
 */
function voidExam() {
    function voidFunc() {
        console.log("void function");
    }
    let voidVar = undefined; // void 타입은 undefined만 할당 가능 (undefined의 슈퍼타입)
}
/**
 * Any 타입 (타입 계층도를 무시하는 치트키 타입)
 */
function anyExam() {
    let unknownVar;
    let anyVar; // 다운캐스팅이 가능함
    let undefinedVar;
    let neverVar;
    anyVar = unknownVar;
    undefinedVar = anyVar;
    // neverVar = anyVar; // never 타입은 어떤 타입의 서브타입도 아님
}
export {};
