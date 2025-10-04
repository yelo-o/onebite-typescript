/**
 * 타입 추론
 */
let a = 10;
let b = "hello";
let c = {
    id: 1,
    name: "이아무개",
    profile: {
        nickname: "yelosta",
    },
    urls: ["https://yelosta.com"],
};
let { id, name, profile } = c;
let [one, two, three] = [1, "hello", true];
function func(message = "hello") {
    return "hello";
}
/**
 * any 타입의 진화 (초기값이 없는 경우)
 */
let d;
d = 10; // 타입이 number로 추론 됨
d.toFixed();
d = "hello";
d.toUpperCase(); // 타입이 string으로 추론 됨
// d.toFixed();
// const 변수는 리터럴 타입으로 추론 됨
const num = 10;
const str = "hello";
let arr = [1, "string"];
export {};
