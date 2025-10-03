// any
// 특정 변수의 타입을 우리가 확실히 모를 때
let anyVar = 10;
anyVar = "hello";
anyVar = true;
anyVar = {};
anyVar = () => { };
anyVar.toUpperCase(); // 런타임 에러 발생 가능성 높음
anyVar.toFixed();
let num = 10;
num = anyVar; // any 타입은 모든 타입에 할당 가능
// unknown
// any 타입과 비슷하지만 더 안전한 타입
let unknownVar;
unknownVar = "hello";
unknownVar = 1;
unknownVar = () => { };
// num = unknownVar; // unknown 타입은 다른 타입에 할당 불가능
if (typeof unknownVar === "number") {
    num = unknownVar; // 타입 가드로 unknown을 number로 좁힘
}
export {};
