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

const container = document.getElementById('container');
const addbtn = document.getElementById('addbtn');
console.log(container);

addbtn.addEventListener('click', addBook)

function addBook(){
    console.log('this is working');
}