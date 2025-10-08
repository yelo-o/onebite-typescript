/**
 * 인터페이스
 */
const person = {
    name: "이아무개",
    sayHi: function () {
        console.log("Hi");
    },
};
// person.name = "";
person.sayHi();
person.sayHi(1, 2);
export {};
