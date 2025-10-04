/**
 * Unknow 타입
 */

function unknownExam() {
    // 업 캐스팅
    let a: unknown = 1;
    let b: unknown = "hello";
    let c: unknown = true;
    let d: unknown = null;
    let e: unknown = undefined;

    let unknownVar: unknown;

    // 다운캐스팅
    // let num: number = unknownVar;
    // let str: string = unknownVar;
    // let bool: boolean = unknownVar;
}

/**
 * Never 타입
 */

function neverExam() {
    function neverFunc(): never {
        while (true) {}
    }

    let num: number = neverFunc();
    let str: string = neverFunc();
    let bool: boolean = neverFunc();

    // 다운캐스팅
    // let never1: never = 10;
    // let never2: never = "string";
    // let never3: never = true;
}

/**
 * Void 타입
 */

function voidExam() {
    function voidFunc(): void {
        console.log("void function");
    }

    let voidVar: void = undefined; // void 타입은 undefined만 할당 가능 (undefined의 슈퍼타입)
}

/**
 * Any 타입 (타입 계층도를 무시하는 치트키 타입)
 */
function anyExam() {
    let unknownVar: unknown;
    let anyVar: any; // 다운캐스팅이 가능함
    let undefinedVar: undefined;
    let neverVar: never;

    anyVar = unknownVar;

    undefinedVar = anyVar;
    // neverVar = anyVar; // never 타입은 어떤 타입의 서브타입도 아님
}
