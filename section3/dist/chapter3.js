/**
 * 기본 타입간의 호환성
 */
let num1 = 10;
let num2 = 10;
num1 = num2; // 업 캐스팅
let animal = {
    name: "기린",
    color: "yellow",
};
let dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도",
};
animal = dog; // Animal은 Dog 타입의 슈퍼타입
let book;
let programmingBook = {
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    skill: "reactjs",
};
book = programmingBook;
export {};
