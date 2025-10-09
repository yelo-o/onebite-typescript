/**
 * 타입스크립트의 클래스
 */
const employee = {
    name: "이아무개",
    age: 27,
    position: "developer",
    work() {
        console.log("일함");
    },
};
class Employee {
    // 필드
    name;
    age;
    position;
    // 생성자
    constructor(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
    // 메서드
    work() {
        console.log("일함");
    }
}
class ExecutiveOfficer extends Employee {
    officeNumber;
    constructor(name, age, position, officeNumber) {
        super(name, age, position);
        this.officeNumber = officeNumber;
    }
}
const employeeB = new Employee("이아무개", 27, "개발자");
console.log(employeeB);
const employeeC = {
    name: "",
    age: 22,
    position: "",
    work() { },
};
export {};
