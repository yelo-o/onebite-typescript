// 객체 리터럴 타입
let user: {
    id?: number; // ? : 선택적 프로퍼티
    name: string;
} = {
    id: 1,
    name: "이아무개",
};

user = {
    name: "김아무개",
};

let config: {
    readonly apiKey: string; // readonly : 읽기 전용 프로퍼티
} = {
    apiKey: "MY API KEY",
};

// config.apiKey = "hacked"; // 읽기 전용 프로퍼티이므로 수정 불가
