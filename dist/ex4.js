"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Circle {
    radius;
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
let circle = new Circle(5);
let rectangle = new Rectangle(4, 6);
console.log(`Circle Area: ${circle.calculateArea()}`);
console.log(`Circle Perimeter: ${circle.calculatePerimeter()}`);
console.log(`Rectangle Area: ${rectangle.calculateArea()}`);
console.log(`Rectangle Perimeter: ${rectangle.calculatePerimeter()}`);
//# sourceMappingURL=ex4.js.map