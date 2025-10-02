// 객체 리터럴 타입
let user = {
    id: 1,
    name: "이아무개",
};
user = {
    name: "김아무개",
};
let config = {
    apiKey: "MY API KEY",
};
export {};
// config.apiKey = "hacked"; // 읽기 전용 프로퍼티이므로 수정 불가
