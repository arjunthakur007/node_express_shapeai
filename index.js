const express = require("express");

//Database
const Database = require("./database")

//Initialization
const OurAPP = express();

OurAPP.get("/",(request, response)=> {
    response.json({message: "Server is working"});
});

OurAPP.get("/book", (req, res)=> {
    return res.json({books: Database.Book});
});

OurAPP.listen(4000, ()=> console.log("Server is running")); //4000 is the route name & the arrow function is optional



































