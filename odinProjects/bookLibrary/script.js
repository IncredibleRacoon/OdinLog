var books = [];


function Book(title, author, pages, pagesRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.pagesRead = pagesRead;

    
}

function addBookToLibrary() {
    let title = document.getElementById("titleInput").value;
    let author = document.getElementById("authorInput").value;
    let number = document.getElementById("numberInput").value;
    let numberRead = document.getElementById("numberReadInput").value;
    document.querySelector("form").reset();

    books.push(new Book(title, author, number, numberRead));
    redrawBooks();
}

function redrawBooks() {
    for (let book of books) {
        alert(book.title);


    }
}


