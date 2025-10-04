/**
 * 대수 타입
 * -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재
 */

/**
 * 1. 합집합 - Union 타입
 */

let a: string | number | boolean;
a = 1;
a = "hello";
a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];

type Dog = {
    name: string;
    color: string;
};

type Person = {
    name: string;
    language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
    name: "",
    color: "",
};

let union2: Union1 = {
    name: "",
    language: "",
};

let union3: Union1 = {
    name: "",
    color: "",
    language: "",
};

// name 속성만 있으면 합집합에 안에 포함 될 수 없다.
// let union4: Union1 = {
//     name: "",
// };

/**
 * 2. 교집합 타입 - Intersection 타입
 */
let varaible: number & string; // never 타입임 (일반적으로 기본 타입으로 교집합을 하면 never 타입)

type Intersection = Dog & Person;

let intersection1: Intersection = {
    // 각 타입의 모든 프로퍼티를 갖고 있어야 함
    name: "",
    color: "",
    language: "",
};
