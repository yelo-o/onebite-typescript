/**
 * 접근 제어자
 * access modifier
 * => public private protected
 */
class Employee {
    // 필드
    name;
    age;
    position; // public
    // 생성자
    constructor(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
    // 메서드
    work() {
        console.log(`${this.name} 일함`);
    }
}
// 생성자에 몰빵하는 방식도 가능
class Employee2 {
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
        console.log(`${this.name} 일함`);
    }
}
const employee2 = new Employee2("홍길동", 20, "admin");
console.log(employee2);
employee2.work();
class ExecutiveOfficer extends Employee {
    officeNumber;
    constructor(name, age, position, officeNumber) {
        super(name, age, position);
        this.officeNumber = officeNumber;
    }
    func() {
        this.age; // protected 는 상속받은 클래스에서 접근 가능
        // this.name;
    }
}
const employee = new Employee("이아무개", 27, "developer");
// employee.name = "홍길동";
// employee.age = 30;
employee.position = "디자이너";
export {};
