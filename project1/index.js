console.log("HEllo")

// To be done further
// 1. Store all the data to the local Storage
// 2. Add a delete button for every book entry

// Book constructor
function Book(name, author, genre) {
    this.name = name;
    this.author = author;
    this.genre = genre;
}

function Display() {

}

Display.prototype.add = function (book) {
    // This will add the entered book into the HTML table
    let tBody = document.getElementById('tableBody');

    let UIString = `<tr>
                      <td>${book.name}</td>
                      <td>${book.author}</td>
                      <td>${book.genre}</td>
                    </tr>`
    tBody.innerHTML+=UIString;
}

Display.prototype.clear = function () {
    // This will clear the form input value after submitting the form
    let form = document.getElementById('libForm');
    form.reset(); // reset() - clears the form input values
}

Display.prototype.validate= function (book) {
    if(book.name.length<4||book.author.length<4)
    {
        return false;
    }
    else
    {
        return true;
    } 
}

Display.prototype.show=function(type,toDisplay){
    let message=document.getElementById('message');
    let point;
    if(type=='success')
    {
        point='Success';
    }
    else
    {
        point='Warning'
    }
    message.innerHTML=`<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>${point}:</strong> ${toDisplay}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>`
    //  After 3 seconds the message should disappear 
    setTimeout(function() {
        message.innerHTML='';
    }, 3000);
}

// When the form will be submitted - adding eventListner to the form submit
let libForm = document.getElementById('libForm');
libForm.addEventListener('submit', actionOnSubmitForm)

function actionOnSubmitForm(e) {
// eventListner function to listen to the submit form event
    let name = document.getElementById('bookName').value; 
    let author = document.getElementById('author').value;

    let fiction = document.getElementById('fiction');
    let biography = document.getElementById('biography');
    let technology = document.getElementById('technology');


    let genre;
    // Check which radio button is selected for genre of book (Book type)
    if (fiction.checked) {
        genre = fiction.value;
    }
    else if (biography.checked) {
        genre = biography.value;
    }
    else if (technology.checked) {
        genre = technology.value;
    }

    // Create a book object using the user's book input
    let book = new Book(name, author, genre);

    let display = new Display();
    
    // Check if correct book is being added to the Library
    if(display.validate(book))
    {
        // Step 1: Add book to the library
        display.add(book);
        // Step 2: Clear user's form input
        display.clear();
        // Step 3:Show success message 
        display.show('success','Your book has been added successfully.');
    }
    else{
        display.show('danger',' You cannot add this book.');
    }
    e.preventDefault(); // prevents from default behaviour of page reloading when the form is submitted
}

