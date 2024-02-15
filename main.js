const myLibrary = [];
let bookTable = document.querySelector("table");
let submitButton = document.querySelector("#submitButton");
let addButton = document.querySelector("#addButton");
let formAdd = document.querySelector(".formAdd");
let deleteButton = document.querySelector(".deleteButton");

addButton.addEventListener("click", function(){
    formAdd.style.visibility = "visible";
})


function Book(title, author, genre) {
    this.title = title, 
    this.author = author, 
    this.genre = genre
}



function addBookToLibrary(book) {
    myLibrary.push(book);
    addBooktoTable(book);
}



// document.querySelector("#addButton").addEventListener("click", addBookToLibrary);

document.querySelector("#submitButton").addEventListener(
    "click",
    function (event) {
        event.preventDefault();
        const inputs = document.querySelector(".formAdd").elements;
        const newBook = new Book(inputs["title"].value, inputs["author"].value, inputs["genre"].value);
        addBookToLibrary(newBook);
        formAdd.style.visibility = "hidden";
    },
    false,
  );


function addBooktoTable(bookToAdd){
        var newLine = bookTable.insertRow();
        var titleCase = newLine.insertCell();
        var authorCase = newLine.insertCell();
        var genreCase = newLine.insertCell();
        var deleteCase = newLine.insertCell();

        var newTitle = document.createTextNode(bookToAdd.title);
        titleCase.appendChild(newTitle);
        var newAuthor = document.createTextNode(bookToAdd.author);
        authorCase.appendChild(newAuthor);
        var newGenre = document.createTextNode(bookToAdd.genre);
        genreCase.appendChild(newGenre);
    
        const newDeleteButton = document.createElement("button");
        newDeleteButton.classList.add("deleteButton");
        newDeleteButton.textContent = "X";
        deleteCase.appendChild(newDeleteButton);
}

