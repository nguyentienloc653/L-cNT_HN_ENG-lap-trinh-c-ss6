"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    speed;
    constructor(initialSpeed) {
        this.speed = initialSpeed;
    }
    speedUp() {
        this.speed += 10;
        return this.speed;
    }
    slowDown() {
        this.speed = Math.max(0, this.speed - 10);
        return this.speed;
    }
    stop() {
        this.speed = 0;
        return this.speed === 0;
    }
}
let car = new Vehicle(50);
console.log(`tang tốc độ: ${car.speedUp()}`);
console.log(`giảm tốc độ: ${car.slowDown()}`);
console.log(`dừng lại: ${car.stop() ? "xe đã dừng" : "xe không dừng"}`);
//# sourceMappingURL=ex5.js.map