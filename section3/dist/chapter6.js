/**
 * 타입 단언
 */
var person = {};
person.name = "이아무개";
person.age = 27;
var dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도"
};
/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */
var num1 = 10; // 10(number) never 타입은 모든 타입의 서브 타입
var num2 = 10; // 10(number) unknown 타입은 모든 타입의 슈퍼 타입
// let num3 = 10 as string; // 불가
var num3 = 10; // 가능(좋은 방법은 아님!)
/**
 * const 단언
 */
var num4 = 10; // let을 const로 바꾸는 효과
var cat = {
    name: "야옹이",
    color: "yellow"
};
var post = {
    title: '게시글1',
    author: "이아무개"
};
// const len: number = post.author?.length;
var len = post.author.length; // author라는 값이 있다고 타입스크립트가 믿도록 함
