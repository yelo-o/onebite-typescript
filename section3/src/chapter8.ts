/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입을 말함
 */

import { console } from "node:inspector/promises";

type Admin = {
    tag: "ADMIN";
    name: string;
    kickCount: string;
};

type Member = {
    tag: "MEMBER";
    name: string;
    point: number;
};

type Guest = {
    tag: "GUEST";
    name: string;
    visitCount: number;
};

type User = Admin | Member | Guest;

// Admin -> {name}님 현재까지 {kickCount}명 강퇴했습니다.
// Member -> {name}님 현재까지 {point}모았습니다.
// Guest -> {name}님 현재까지 {visitCount}번 방문했습니다.
function login(user: User) {
    switch (user.tag) {
        case "ADMIN":
            console.log(
                `${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`,
            );
            break;
        case "MEMBER":
            console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
            break;
        case "GUEST":
            console.log(
                `${user.name}님 현재까지 ${user.visitCount}번 방문했습니다.`,
            );
            break;
    }
}

/**
 * 추가 사례
 */

function processResult(task: AsyncTask) {
    switch (task.state) {
        case "LOADING":
            console.log("로딩 중");
            break;
        case "FAILED":
            // console.log(`에러 발생 : ${task.error?.message}`);
            console.log(`에러 발생 : ${task.error.message}`);
            break;
        case "SUCCESS":
            // console.log(`에러 발생 : ${task.response?.data}`);
            console.log(`에러 발생 : ${task.response.data}`);
            break;
    }
}
type LoadingTask = {
    state: "LOADING";
};
type FailTask = {
    state: "FAILED";
    error: {
        message: string;
    };
};
type SuccessTask = {
    state: "SUCCESS";
    response: {
        data: string;
    };
};
type AsyncTask = LoadingTask | FailTask | SuccessTask;
// type AsyncTask = {
//     state: "LOADING" | "FAILED" | "SUCCESS";
//     error?: {
//         message: string;
//     };
//     response?: {
//         data: string;
//     };
// };

// 비동기 작업의 결과를 처리하는 객체
const loading: AsyncTask = {
    state: "LOADING",
};
const failed: AsyncTask = {
    state: "FAILED",
    error: {
        message: "오류 발생 원인은 ~~",
    },
};
const success: AsyncTask = {
    state: "SUCCESS",
    response: {
        data: "데이터 ~~",
    },
};
