/**
 * 함수 타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는 기준은
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */
let a = () => 10;
let b = () => 10;
a = b;
let c = (value) => { };
let d = (value) => { };
// c = d; // 오히려 업캐스팅이 안됨!
d = c;
let animalFunc = (animal) => {
    console.log(animal.name);
};
let dogFunc = (dog) => {
    console.log(dog.name);
    console.log(dog.color);
};
// animalFunc = dogFunc;
let testFunc = (animal) => {
    console.log(animal.name);
    // console.log(animal.color);
};
dogFunc = animalFunc;
let testFunc2 = (dog) => {
    console.log(dog.name);
    console.log(dog.color);
};
let func1 = (a, b) => { };
let func2 = (a) => { };
func1 = func2;
func2 = func1;
export {};
