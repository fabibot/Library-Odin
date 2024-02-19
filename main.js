const myLibrary = [];
let idBook = 0;
let submitButton = document.querySelector("#submitButton");
let addButton = document.querySelector("#addButton");
let formAdd = document.querySelector(".formAdd");


//  const book1 = new Book(0, 'Harry Potter', 'JKRooling', 'Fantaisy');
//  const book2 = new Book(1,'L attrape coeur', 'JD Salinger', 'Poche');
//  const book3 = new Book(2, 'Montagne halluciné', 'Lovecraft', 'Fantastique');
//  addBookToLibrary(book1);
//  addBookToLibrary(book2);
//  addBookToLibrary(book3);


addButton.addEventListener("click", function(){
    formAdd.style.visibility = "visible";
})


document.querySelector("#submitButton").addEventListener(
    "click",
    function (event) {
        event.preventDefault();
        const inputs = document.querySelector(".formAdd").elements;
        const newBook = new Book(idBook, inputs["title"].value, inputs["author"].value, inputs["genre"].value);
        idBook++;
        addBookToLibrary(newBook);
        formAdd.style.visibility = "hidden";

    },
    false,
  );



function Book(id, title, author, genre) {
    this.id = id,
    this.title = title, 
    this.author = author, 
    this.genre = genre

}


function addBookToLibrary(book) {
    myLibrary.push(book);
    addBooktoTable(book);
}


function addBooktoTable(bookToAdd){
    const bodyTable = document.querySelector('tbody');
    var newLine = bodyTable.insertRow();
    var titleCase = newLine.insertCell();
    var authorCase = newLine.insertCell();
    var genreCase = newLine.insertCell();
    var readStatusCase = newLine.insertCell();
    readStatusCase.classList.add("readStatusCase")
    var deleteCase = newLine.insertCell();

    var newTitle = document.createTextNode(bookToAdd.title);
    titleCase.appendChild(newTitle);
    var newAuthor = document.createTextNode(bookToAdd.author);
    authorCase.appendChild(newAuthor);
    var newGenre = document.createTextNode(bookToAdd.genre);
    genreCase.appendChild(newGenre);

    const readCursor = document.createElement('div');
    readCursor.classList.add("readCursor");
    const circleCursor = document.createElement('div');
    circleCursor.classList.add('circleCursor');
    readStatusCase.appendChild(readCursor);
    readCursor.appendChild(circleCursor);


    const divPlusMoins = document.createElement('div');
    const moins = document.createElement("p");
    const plus = document.createElement("p");
    moins.textContent = "-";
    plus.textContent = "+";
    divPlusMoins.classList.add('plusMoins');
    readStatusCase.appendChild(divPlusMoins);
    divPlusMoins.appendChild(moins);
    divPlusMoins.appendChild(plus);

    moins.addEventListener('click', () =>{
        decreaseReadStatus(circleCursor);
    });
    plus.addEventListener('click', () =>{
        increaseReadStatus(circleCursor);
    });

    const newDeleteButton = document.createElement("button");
    newDeleteButton.classList.add("deleteButton");
    newDeleteButton.setAttribute("id", idBook-1);
    newDeleteButton.textContent = "X";
    deleteCase.appendChild(newDeleteButton);

    newDeleteButton.addEventListener('click', (e) =>{
        let idButton = newDeleteButton.getAttribute('id');
        searchBook(idButton);
        console.log(myLibrary);
    });
        
}

function searchBook(id){
    for(let i = 0; i < myLibrary.length; i++){
    if(myLibrary[i].id == id){
        myLibrary.splice(i, 1);
        document.querySelector("table").deleteRow(i+1);
        break;
    }
}  
}

function increaseReadStatus(circleCursor){
    let circleWidth = circleCursor.clientWidth;
    if(circleWidth < 100){
        circleCursor.style.width = circleWidth + 5 + 'px';
    }
    console.log(circleWidth);
}

function decreaseReadStatus(circleCursor){
    let circleWidth = circleCursor.clientWidth;
    console.log(circleWidth);
    if(circleWidth > 15){
        circleCursor.style.width = circleWidth - 5 + 'px';
    }
    console.log(circleWidth);
}