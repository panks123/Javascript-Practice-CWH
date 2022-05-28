console.log('Excercise4')

class Library{
    constructor(bookList)
    {
        this.bookList=bookList;
        this.issuedBooks={};
    }

    getbookList(){
        this.bookList.forEach(element => {
            console.log(element);
        });
    }

    issueBook(bookName,user){
        if(this.issuedBooks[bookName]==undefined)
        {
            this.issuedBooks[bookName]=user;
        }
        else
        {
            console.log('Sorry! This book is not available.')
        }
    }

    returnBook(bookName)
    {
        if(this.issuedBooks[bookName]!=undefined)
        {
            delete this.issuedBooks[bookName];
        }
        else
        {
            console.log(bookName,': not present in your issued Book list');
        }
    }
}