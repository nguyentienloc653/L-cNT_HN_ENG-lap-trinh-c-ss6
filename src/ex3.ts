abstract class Job {
  protected type: string;
  constructor(type: string) {
    this.type = type;
  }

  // method thường
  printType(): void {
    console.log(`Job type: ${this.type}`);
  }
  // abstract method
  abstract calculateSalary(): number;
}

class FullTimeJob extends Job {
  calculateSalary(): number {
    return 10000000;
  }
}

class PartTimeJob extends Job {
  constructor(type: string, private workHours: number) {
    super(type);
  }
  calculateSalary(): number {
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
