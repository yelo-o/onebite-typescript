/**
 * 타입 단언
 */

type Person = {
    name: string;
    age: number;
};

let person = {} as Person;
person.name = "이아무개";
person.age = 27;

type Dog = {
    name: string;
    color: string;
};

let dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도",
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

let num1 = 10 as never; // 10(number) never 타입은 모든 타입의 서브 타입
let num2 = 10 as unknown; // 10(number) unknown 타입은 모든 타입의 슈퍼 타입

// let num3 = 10 as string; // 불가
let num3 = 10 as unknown as string; // 가능(좋은 방법은 아님!)

/**
 * const 단언
 */

let num4 = 10 as const; // let을 const로 바꾸는 효과

let cat = {
    name: "야옹이",
    color: "yellow",
} as const;

// cat.name = '멍멍이'; // 프로퍼티를 readonly로 변경 시킴(수정 불가)

/**
 * Non Null 단언
 */

type Post = {
    title: string;
    author?: string;
};

let post: Post = {
    title: "게시글1",
    author: "이아무개",
};

// const len: number = post.author?.length;
const len: number = post.author!.length; // author라는 값이 있다고 타입스크립트가 믿도록 함
