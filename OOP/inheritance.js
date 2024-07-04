class Product {
    constructor(){
        this.ProductName;
        this.ProductPrice
    }
}

class Book extends Product {
    constructor() {
        super()
        this.author
    }
    setProductPrice(nominal) {
        this.ProductPrice = nominal
    }

    setProductName(name) {
        this.ProductName = name
    }
    setAuthor(authorName) {
        this.author = authorName
    }

    getAuthor(){
        return this.author
    }
}

const book = new Book()
book.setAuthor ("J. R. R. Tolkien")
book.setProductName ("Book B")
book.setProductPrice(10000)
console.log(book);


const product = new Product ()


console.log(book instanceof Book)
console.log(book instanceof Product)
console.log(product instanceof Product)
console.log(product instanceof Book)