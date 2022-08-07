// function Book(title, author, pages, isRead){
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.isRead = false;
//     this.read = function (){
//         this.isRead = true
//     }

//     this.info = function() {
//         let readOrNot;
//         if (this.isRead === true){
//             readOrNot = 'You have read this book.'
//         } else {
//             readOrNot = "You haven't read this book."
//         }
//         return `${this.title} written by ${this.author}. ${this.pages} pages, ${readOrNot}`
//     }
// }

// let book = new Book('Sapiens', 'Yuval Noah Harari', '1000', true)
// console.log(book.info());
// book.read();
// console.log(book.info());

// // const button = document.getElementById('toggle');
// const submit = document.getElementById('submit');

// button.addEventListener('click',toggle); 

// function toggle(e){
//     console.log(e.target);
//     if(e.target.dataset.toggle === 'true'){
//         e.target.dataset.toggle = 'false';
//         e.target.textContent = 'not read';
//     } else {
//         e.target.dataset.toggle = 'true';
//         e.target.textContent = 'read';
//     }

// }

// all about the library

let library = [];

function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(){
    let book = new Book()
}

console.log(document.getElementById('AddBook'));