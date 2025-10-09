/**
 * 인터페이스와 클래스
 */
class Character {
    name;
    moveSpeed;
    extra;
    constructor(name, moveSpeed, extra) {
        this.name = name;
        this.moveSpeed = moveSpeed;
        this.extra = extra;
    }
    move() {
        console.log(`${this.moveSpeed} 속도로 이동!`);
    }
}
export {};
