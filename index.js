const express = require("express");

//Database
const Database = require("./database")

//Initialization
const OurAPP = express();

//Route  - "/"
//Des    - 
//Access - Public
//Method - GET
//Params - none
//Body   - none
OurAPP.get("/",(request, response)=> {
    response.json({message: "Server is working"});
});

//Route  - "/books"
//Des    - To get all books
//Access - Public
//Method - GET
//Params - none
//Body   - none
OurAPP.get("/books", (req, res)=> {
    return res.json({books: Database.Books});
});

//Route  - "/books/:bookID"
//Des    - to get a specific book by ID(ISBN)
//Access - Public
//Method - GET
//Params - bookID
//Body   - none
OurAPP.get("/books/:bookID", (req, res)=> {
    const getBook = Database.Books.filter(
        (book)=> book.ISBN === req.params.bookID
    );

    return res.json({book: getBook});
});

//Route  - "/books/c/:category"
//Des    - to get a list of books based on category.
//Access - Public
//Method - GET
//Params - bookID
//Body   - none
OurAPP.get("/books/c/:category", (req, res)=> {
    const getBook = Database.Books.filter(
        (book)=> book.category.includes(req.params.category)
    );

    return res.json({book: getBook});
})
OurAPP.listen(4000, ()=> console.log("Server is running")); //4000 is the route name & the arrow function is optional



































