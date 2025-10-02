// 타입 별칭
type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
};

let user: User = {
    id: 1,
    name: "이아무개",
    nickname: "yelo",
    birth: "1999-01-01",
    bio: "안녕하세요",
    location: "서울",
};

let user2: {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
} = {
    id: 2,
    name: "홍길동",
    nickname: "yelo",
    birth: "1999-01-01",
    bio: "안녕하세요",
    location: "서울",
};
