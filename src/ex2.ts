abstract class Job {
  protected type: string;
  constructor(type: string) {
    this.type = type;
  }

  printType(): void {
    console.log(`Job type: ${this.type}`);
  }
  abstract calculateSalary(): number;
}

class FullTimeJob extends Job {
  constructor(type: string) {
    super(type);
  }
  calculateSalary(): number {
    return 10000000;
  }
}
class ParttimeJob extends Job {
  private workHours: number;
  constructor(type: string, workHours: number) {
    super(type);
    this.workHours = workHours;
  }

  calculateSalary(): number {
    return this.workHours * 30000;
  }
}

let fullTime = new FullTimeJob("Full-time");
let partTime = new ParttimeJob("Part-time", 20);
fullTime.printType();
console.log(`Full-time salary: ${fullTime.calculateSalary()}`);
partTime.printType();
console.log(`Part-time salary: ${partTime.calculateSalary()}`);
