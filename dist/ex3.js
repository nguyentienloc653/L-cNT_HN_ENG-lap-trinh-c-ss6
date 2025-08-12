"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Job {
    type;
    constructor(type) {
        this.type = type;
    }
    // method thường
    printType() {
        console.log(`Job type: ${this.type}`);
    }
}
class FullTimeJob extends Job {
    calculateSalary() {
        return 10000000;
    }
}
class PartTimeJob extends Job {
    workHours;
    constructor(type, workHours) {
        super(type);
        this.workHours = workHours;
    }
    calculateSalary() {
        return this.workHours * 30000;
    }
}
let fullTime = new FullTimeJob("Full-time");
let partTime = new PartTimeJob("Part-time", 20);
fullTime.printType();
console.log(`Full-time salary: ${fullTime.calculateSalary()}`);
partTime.printType();
console.log(`Part-time salary: ${partTime.calculateSalary()}`);
// method thường có lớp con dùng luôn không cần viết lại
// abstract method phải được lớp con định nghĩa lại
//# sourceMappingURL=ex3.js.map