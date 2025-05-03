const express = require("express");

//Initialization
const OurAPP = express();

OurAPP.get("/",(request, response)=> {
    response.json({message: "Hello world"});
});

OurAPP.listen(4000, ()=> console.log("Server is running")); //4000 is the route name & the arrow function is optional



































