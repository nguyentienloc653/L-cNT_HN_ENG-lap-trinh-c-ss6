abstract class Shape {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  abstract getSzire(): void;
}

class Rectangle extends Shape {
  private width: number;
  private height: number;

  constructor(name: string, width: number, height: number) {
    super(name);
    this.width = width;
    this.height = height;
  }

  getSzire(): void {
    console.log(
      `Rectangle ${this.getName()} has size ${this.width * this.height}`
    );
  }
}

let rect = new Rectangle("Hinh chu nhat", 5, 10);
rect.getSzire();
