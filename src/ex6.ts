class Student {
  private id: number;
  private name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }
}

let allStudents: Student[] = [];

class classroom {
  students: Student[];
  constructor() {
    this.students = [];
  }
  showStudents(): void {
    if (this.students.length === 0) {
      console.log("lớp không có học sinh");
    } else {
      console.log("Danh sách học sinh trong lớp:");
      this.students.forEach((student) => {
        console.log(`ID: ${student.getId()}, Name: ${student.getName()}`);
      });
    }
  }
  addStudent(student: Student): void {
    this.students.push(student);
  }
  filterStudent(id: number): Student | undefined {
    return this.students.find((student) => student.getId() === id);
  }
  addStudentInClass(id: number): void {
    let student = allStudents.find((student) => student.getId() === id);
    if (student) {
      this.students.push(student);
    }
  }
}

allStudents.push(
  new Student(1, "Linh"),
  new Student(2, "Hùng"),
  new Student(3, "Lộc"),
  new Student(4, "Hà"),
  new Student(5, "Hải"),
  new Student(6, "Nam")
);

let class1 = new classroom();
let class2 = new classroom();

class1.addStudentInClass(1);
class1.addStudentInClass(2);
class1.addStudentInClass(3);
class2.addStudentInClass(4);
class2.addStudentInClass(5);
class2.addStudentInClass(6);

class1.showStudents();
class2.showStudents();

console.log(allStudents);
