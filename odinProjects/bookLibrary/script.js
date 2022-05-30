

function Book(title, author, pages, readYetBool) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readYetBool = readYetBool;

    this.info = () => {
        let informationString = `${this.title} by ${this.author}, ` +
                                 `${this.pages} pages, ` +
                                 `${this.readYetBool? "read." : "not read yet."}`
        return informationString;
    }
}


let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", false);

console.log(theHobbit.info());