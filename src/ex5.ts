interface changeSpeed {
  speedUp(): number;
  slowDown(): number;
  stop(): boolean;
}

class Vehicle implements changeSpeed {
  private speed: number;

  constructor(initialSpeed: number) {
    this.speed = initialSpeed;
  }

  speedUp(): number {
    this.speed += 10;
    return this.speed;
  }

  slowDown(): number {
    this.speed = Math.max(0, this.speed - 10);
    return this.speed;
  }

  stop(): boolean {
    this.speed = 0;
    return this.speed === 0;
  }
}

let car = new Vehicle(50);
console.log(`tang tốc độ: ${car.speedUp()}`);
console.log(`giảm tốc độ: ${car.slowDown()}`);
console.log(`dừng lại: ${car.stop() ? "xe đã dừng" : "xe không dừng"}`);
