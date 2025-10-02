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

// 인덱스 시그니처
type CountryCodes = {
    // Korea: string;
    // UnitedStates: string;
    // Japan: string;
    [key: string]: string;
};

let countryCodes: CountryCodes = {
    Korea: "ko",
    UnitedStates: "us",
    Japan: "jp",
};

type CountryNumberCodes = {
    [key: string]: number;
    Korea: number;
};
let countryNumberCodes: CountryNumberCodes = {
    Korea: 410,
};
