/**
 * 인터페이스 확장
 */

// interface Animal { // 가능
type Animal = {
    // 가능
    name: string;
    color: string;
};

interface Dog extends Animal {
    // interface가 아니라 type으로 Animal을 정의해도 확장 가능
    isBark: boolean;
}

const dog: Dog = {
    name: "",
    color: "",
    isBark: true,
};

interface Cat extends Animal {
    isScratch: true;
}

interface Chicken extends Animal {
    isFly: true;
}

interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
    name: "",
    color: "",
    isBark: true,
    isScratch: true,
};
