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

// const submit = document.getElementById('submit');

// button.addEventListener('click',toggle); 


// all about the library

let library = [];

const formElement = document.getElementById('addBook');
const submitBtn = document.getElementById('submit');
const bookList = document.getElementById('booklist');

submitBtn.onclick = () => addBookToLibrary(formElement[0].value,formElement[1].value,formElement[2].value)


function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(title,author,pages){
    let book = new Book(title,author,pages)
    library.push(book);
}

function displayBook(arr){
    console.log(arr);
    let count = 1;
    for (let i of arr){
        let bookId = count;
        let title = i.title;
        let author = i.author;
        let pages = i.pages;
        makeTable(bookId,title,author,pages);
        count++;
    }
}

function makeTable(bookId,title, author, pages){
    const tr = document.createElement('tr');
    const th = document.createElement('th');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const btn = document.createElement('button');

    th.innerHTML = bookId;
    td1.innerHTML = title;
    td2.innerHTML = author;
    td3.innerHTML = pages;
    btn.innerHTML = 'not read';
    th.setAttribute('scope', 'row');
    btn.classList.add('toggle');
    btn.setAttribute('data-toggle', 'false');
    btn.addEventListener('mousedown', toggle)

    bookList.appendChild(tr);
    tr.appendChild(th);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(btn);
}

function toggle(e){
    console.log(e.target);
    if(e.target.dataset.toggle === 'true'){
        e.target.dataset.toggle = 'false';
        e.target.textContent = 'not read';
    } else {
        e.target.dataset.toggle = 'true';
        e.target.textContent = 'read';
    }
}

// dummy data 

addBookToLibrary('Python', 'snake', 1000)
addBookToLibrary('Java', 'coffee', 2200)

// end dummy data

displayBook(library);