class Library{
    constructor(){
        this.books = [{
                "author": "Hans Christian Andersen",
                "country": "Denmark",
                "imageLink": "images/fairy-tales.jpg",
                "language": "Danish",
                "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
                "pages": 784,
                "title": "Fairy tales",
                "year": 1836
            }];
        this.cart=[]
    }
    addBooks(book){
    	// console.log(this.books)
    	this.books.push(book)
    	// console.log(this.books)

        this.cart.push(book)
    }
    deleteBook(title){
        for(const book in this.books){
            if(book.title === title){
                let i = indexOf(book.title)
                this.books.splice(i, 1)
            }
        }
    }
    addToCart(title){
        let addB = this.books.find(b =>{
            return m.title === title
        })
       this.cart.push(addB)
    }
    pagesum(){
        this.cart.reduce(function(a, b){
            return a.pages + b.pages
        })
    }
}
// let lib = new Library();
// lib.addBooks()
// console.log(lib)
