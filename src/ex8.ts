class Book {
  constructor(
    private id: number,
    private title: string,
    private author: string,
    public stock: number,
    public status: string
  ) {}

  getId(): number {
    return this.id;
  }
  getTitle(): string {
    return this.title;
  }
  getAuthor(): string {
    return this.author;
  }
  getStock(): number {
    return this.stock;
  }
  getStatus(): string {
    return this.status;
  }
  setStock(newStock: number): void {
    this.stock = newStock;
  }
  setStatus(newStatus: string): void {
    this.status = newStatus;
  }
}

class Library {
  private books: Book[] = [];

  addBook(book: Book): void {
    this.books.push(book);
  }

  showBooks(): void {
    if (this.books.length === 0) {
      console.log("Thư viện không có sách");
    } else {
      console.log("Danh sách sách trong thư viện:");
      this.books.forEach((book) => {
        console.log(
          `ID: ${book.getId()}, Title: ${book.getTitle()}, Author: ${book.getAuthor()}, Stock: ${book.getStock()}, Status: ${book.getStatus()}`
        );
      });
    }
  }
}

let library = new Library();
let book1 = new Book(
  1,
  "The Great Gatsby",
  "F. Scott Fitzgerald",
  5,
  "Available"
);
let book2 = new Book(2, "1984", "George Orwell", 3, "Available");

library.addBook(book1);
library.addBook(book2);
library.showBooks();
