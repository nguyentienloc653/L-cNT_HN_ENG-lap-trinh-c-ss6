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
  setName(newName: string): void {
    this.name = newName;
  }
}

let allStudents: Student[] = [];

class Classroom {
  students: Student[];
  constructor() {
    this.students = [];
  }

  showStudents(): void {
    if (this.students.length === 0) {
      console.log("Lớp không có học sinh");
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
    const student = allStudents.find((s) => s.getId() === id);
    if (student) {
      this.students.push(student);
      allStudents = allStudents.filter((s) => s.getId() !== id);
    }
  }

  removeStudent(id: number): void {
    const student = this.students.find((s) => s.getId() === id);
    if (student) {
      allStudents.push(student);
      this.students = this.students.filter((s) => s.getId() !== id);
    }
  }

  editStudent(id: number, newName: string): void {
    let student = this.students.find((student) => student.getId() === id);
    if (student) {
      student.setName(newName);
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

let class1 = new Classroom();
let class2 = new Classroom();

class1.addStudentInClass(1);
class1.addStudentInClass(2);
class1.addStudentInClass(3);

class2.addStudentInClass(4);
class2.addStudentInClass(5);
class2.addStudentInClass(6);

class1.showStudents();
class2.showStudents();
console.log("All Students:", allStudents);

class1.editStudent(2, "Hùng hahaaa");
class2.removeStudent(5);

class1.showStudents();
class2.showStudents();
console.log("All Students:", allStudents);
