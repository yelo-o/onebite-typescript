/**
 * 사용자 정의 타입가드
 */

type Dog = {
    name: string;
    isBark: Boolean;
};

type Cat = {
    name: string;
    isScratch: boolean;
};

type Animal = Cat | Dog;

// 사용자 정의 타입가드
function isDog(animal: Animal): animal is Dog {
    return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat {
    return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
    if (isDog(animal)) {
        // 강아지
        animal;
    } else if (isCat(animal)) {
        // 고양이
        animal;
    }
}
