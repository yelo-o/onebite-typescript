/**
 * 제네릭 인터페이스
 */
let keyPair = {
    key: "key",
    value: 0,
};
let keyPair2 = {
    key: true,
    value: ["1"],
};
let numberMap1 = {
    key: -123,
    key2: 444,
    3123: 22,
};
let stringMap = {
    key: "value",
};
let booleanMap = {
    key: true,
};
let stringMap2 = {
    key: "heelo",
};
function goToSchool(user) {
    // if (user.profile.type !== "student") {
    //     console.log("잘못 오셨습니다");
    //     return;
    // }
    const school = user.profile.school;
    console.log(`${school}로 등교 완료`);
}
// goToSchool(developerUser); // 불가
const developerUser = {
    name: "이아무개",
    profile: {
        type: "developer",
        skill: "TypeScript",
    },
};
const studentUser = {
    name: "홍길동",
    profile: {
        type: "student",
        school: "가톨릭대학교",
    },
};
export {};
