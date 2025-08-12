"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    id;
    title;
    author;
    stock;
    status;
    constructor(id, title, author, stock, status) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    getStock() {
        return this.stock;
    }
    getStatus() {
        return this.status;
    }
    setStock(newStock) {
        this.stock = newStock;
    }
    setStatus(newStatus) {
        this.status = newStatus;
    }
}
class Library {
    books = [];
    addBook(book) {
        this.books.push(book);
    }
    showBooks() {
        if (this.books.length === 0) {
            console.log("Thư viện không có sách");
        }
        else {
            console.log("Danh sách sách trong thư viện:");
            this.books.forEach((book) => {
                console.log(`ID: ${book.getId()}, Title: ${book.getTitle()}, Author: ${book.getAuthor()}, Stock: ${book.getStock()}, Status: ${book.getStatus()}`);
            });
        }
    }
}
let library = new Library();
let book1 = new Book(1, "The Great Gatsby", "F. Scott Fitzgerald", 5, "Available");
let book2 = new Book(2, "1984", "George Orwell", 3, "Available");
library.addBook(book1);
library.addBook(book2);
library.showBooks();
//# sourceMappingURL=ex8.js.map