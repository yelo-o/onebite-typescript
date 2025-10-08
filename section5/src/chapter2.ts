/**
 * 선언 합침
 */

interface Person {
    name: string;
}

interface Person {
    name: string;
    age: number;
}

interface Developer extends Person {
    name: "hello";
}

const person: Person = {
    name: "",
    age: 27,
};

/**
 * 모듈 보강
 */

// 이미 있는 Lib 인터페이스
interface Lib {
    a: number;
    b: number;
}

// 모듈 보강
interface Lib {
    c: string;
}

const lib: Lib = {
    a: 1,
    b: 2,
    c: "hello", // 이 속성을 위해 모듈 보강
};
