"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Shape {
    name;
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Rectangle extends Shape {
    width;
    height;
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSzire() {
        console.log(`Rectangle ${this.getName()} has size ${this.width * this.height}`);
    }
}
let rect = new Rectangle("Hinh chu nhat", 5, 10);
rect.getSzire();
//# sourceMappingURL=ex1.js.map