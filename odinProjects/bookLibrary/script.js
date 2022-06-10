var books = [];


class Book {
    

    constructor(title, author, pages, readYet, indexInList) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readYet = readYet;
        this.indexInList = indexInList;    
    }

    drawBook = () => {

        this.bookContainer = document.createElement("div");
        this.bookContainer.style.height = "fit-content";

        this.textContainer = document.createElement("div");
        if (!this.readYet) {
            this.textContainer.style.background = "rgb(104, 87, 148)";
        }        
        this.textContainer.setAttribute("class", "bookContainer");
        this.bookContainer.appendChild(this.textContainer);

        let bookTitle = document.createElement("div");
        bookTitle.innerHTML = this.title;
        bookTitle.setAttribute("class", "bookTitle");
        this.textContainer.appendChild(bookTitle);

        let bookAuthor = document.createElement("div");
        bookAuthor.innerHTML = this.author;
        bookAuthor.setAttribute("class", "bookAuthor");
        this.textContainer.appendChild(bookAuthor);

        let buttonContainer = document.createElement("div");
        buttonContainer.style.display = "flex";
        buttonContainer.style.gap = "10px";
        this.textContainer.appendChild(buttonContainer);

        let readButton = document.createElement("button");
        readButton.setAttribute("class", "readButton");
        readButton.innerHTML = "Read";
        readButton.addEventListener("click", () => {
            if (this.readYet) {
                this.textContainer.style.background = "rgb(104, 87, 148)";
                this.readYet = false;

            } else {
                this.textContainer.style.background = "linear-gradient(135deg, #b39fff, #8a57ff)";
                this.readYet = true;
            }
            localStorage.setItem("books", JSON.stringify(books))
        })
        buttonContainer.appendChild(readButton);

        let trashButton = document.createElement("div");
        trashButton.setAttribute("class", "deleteButton");
        trashButton.addEventListener("click", () => {
            books.splice(this.indexInList, 1);
            localStorage.setItem("books", JSON.stringify(books))
            readinObjects();
            redrawBooks();
        })

        let trashIcon = document.createElement("i");
        trashIcon.setAttribute("class", "fa fa-trash-o");
        trashButton.appendChild(trashIcon);
        buttonContainer.appendChild(trashButton);

        let pagesNumber = document.createElement("div");
        pagesNumber.innerHTML = this.pages;
        pagesNumber.setAttribute("class", "bookPages");
        this.textContainer.appendChild(pagesNumber);

        document.getElementById("bookContainer").appendChild(this.bookContainer);
    }

    
}

function addBookToLibrary() {
    let title = document.getElementById("titleInput").value;
    let author = document.getElementById("authorInput").value;
    let number = document.getElementById("numberInput").value;
    let readYet = document.getElementById("readBoolInput").checked;

    oldBooks = JSON.parse(localStorage.getItem("books"))
    oldBooks.push(new Book(title, author, number, readYet))
    localStorage.setItem("books", JSON.stringify(oldBooks))
    
}

function redrawBooks() {

    let counter = 0;
    dedrawBooks();

    for (let book of books) {

        book.drawBook();
    }
}







function startFunction() {

    if ((localStorage.getItem("books") == undefined)) {
        localStorage.setItem("books", JSON.stringify([]));
    }
    readinObjects();
    redrawBooks();
}




function readinObjects() {
    let counter = 0;
    books.length = 0;
    for (let book of JSON.parse(localStorage.getItem("books"))) {
        books.push(new Book(book["title"], book["author"], book["pages"], book["readYet"], counter));
        counter += 1;
    }
}



function dedrawBooks() {
    const myNode = document.getElementById("bookContainer");
    while (myNode.childElementCount > 1) {
        myNode.removeChild(myNode.lastChild);
    }

}




