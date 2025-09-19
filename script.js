function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function () {
    readStr = read === true ? "already read" : "not read yet"
    return `${title} by ${author}, ${pages} pages, ${readStr}`
  }
}

let book1 = new Book("The Hobbit", "J.R.R Tolkien", 295, true)
