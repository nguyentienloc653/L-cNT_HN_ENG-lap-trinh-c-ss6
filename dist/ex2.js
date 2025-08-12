"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Job {
    type;
    constructor(type) {
        this.type = type;
    }
    printType() {
        console.log(`Job type: ${this.type}`);
    }
}
class FullTimeJob extends Job {
    constructor(type) {
        super(type);
    }
    calculateSalary() {
        return 10000000;
    }
}
class ParttimeJob extends Job {
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
let partTime = new ParttimeJob("Part-time", 20);
fullTime.printType();
console.log(`Full-time salary: ${fullTime.calculateSalary()}`);
partTime.printType();
console.log(`Part-time salary: ${partTime.calculateSalary()}`);
//# sourceMappingURL=ex2.js.map