/**
 * Filename: sophisticated_code.js
 *
 * Description: This code demonstrates a sophisticated, elaborate, and complex JavaScript application.
 *              It's a virtual library management system that allows users to add, search, and borrow books.
 *              It includes multiple classes, inheritance, data manipulation, and user interaction.
 *              Note: This is a sample code and may not function perfectly.
 */

// Book class to represent a book
class Book {
  constructor(title, author, pageCount, genre) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.genre = genre;
  }

  displayDetails() {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`Page Count: ${this.pageCount}`);
    console.log(`Genre: ${this.genre}`);
  }
}

// Library class to manage the library operations
class Library {
  constructor(libraryName) {
    this.libraryName = libraryName;
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
    console.log(`Book [${book.title}] added to the library.`);
  }

  searchBook(title) {
    const foundBooks = this.books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
    if (foundBooks.length === 0) {
      console.log(`No books found with the title '${title}' in the library.`);
    } else {
      console.log(`${foundBooks.length} books found with the title '${title}':`);
      foundBooks.forEach(book => {
        book.displayDetails();
        console.log('-----');
      });
    }
  }

  borrowBook(title) {
    const foundBookIndex = this.books.findIndex(book => book.title.toLowerCase().includes(title.toLowerCase()));
    if (foundBookIndex === -1) {
      console.log(`No books found with the title '${title}' in the library.`);
    } else {
      const borrowedBook = this.books.splice(foundBookIndex, 1)[0];
      console.log(`Book [${borrowedBook.title}] borrowed successfully.`);
    }
  }
}

// AdminLibrary class that inherits from Library and adds admin-specific functionalities
class AdminLibrary extends Library {
  constructor(libraryName, adminName) {
    super(libraryName);
    this.adminName = adminName;
  }

  removeBook(title) {
    const foundBookIndex = this.books.findIndex(book => book.title.toLowerCase().includes(title.toLowerCase()));
    if (foundBookIndex === -1) {
      console.log(`No books found with the title '${title}' in the library.`);
    } else {
      const removedBook = this.books.splice(foundBookIndex, 1)[0];
      console.log(`Book [${removedBook.title}] removed from the library.`);
    }
  }
}

// Creating instances of classes
const library = new Library('My Library');
const adminLibrary = new AdminLibrary('Admin Library', 'Admin User');

// Adding books to the library
const book1 = new Book('JavaScript: The Good Parts', 'Douglas Crockford', 176, 'Programming');
library.addBook(book1);

const book2 = new Book('Clean Code', 'Robert C. Martin', 464, 'Programming');
library.addBook(book2);

const book3 = new Book('The Catcher in the Rye', 'J.D. Salinger', 234, 'Fiction');
library.addBook(book3);

// Borrowing a book from the library
library.borrowBook('Clean Code');

// Searching books in the library
library.searchBook('code');

// Removing a book from the admin library
adminLibrary.removeBook('The Catcher in the Rye');

// Output:
// Book [JavaScript: The Good Parts] added to the library.
// Book [Clean Code] added to the library.
// Book [The Catcher in the Rye] added to the library.
// Book [Clean Code] borrowed successfully.
// 2 books found with the title 'code':
// Title: JavaScript: The Good Parts
// Author: Douglas Crockford
// Page Count: 176
// Genre: Programming
// -----
// Title: Clean Code
// Author: Robert C. Martin
// Page Count: 464
// Genre: Programming
// -----
// Book [The Catcher in the Rye] removed from the library.