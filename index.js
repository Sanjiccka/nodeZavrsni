const users = require("./models/users");
const express = require("express");
var app = express();
const myParser = require("body-parser");
app.use(myParser.urlencoded({ extended: true }));
const session = require("express-session");
app.use(session({ secret: "test" }));
const product = require("./models/products");




var u1 = new users.create("Sanja", "Vasovik", "admin@yahoo.com", "000000", "1310987", "0700000");


app.post("/register", (req, res) => {
    var fn = req.body.firstname;
    var ln = req.body.lastname;
    var email = req.body.email;
    var bd = req.body.birth;
    var tel = req.body.tel;
    var country = req.body.country;
    var pass = req.body.pass;


    var newUser = new users.create(fn, ln, email, bd, tel, country, pass);
});



app.post("/login", (req, res) => {
    var email = req.body.emailLogin;
    var pass = req.body.passLogin;

    // database cheks

    req.session.user = email;

    //  return res from FE 

})


app.post("/newProduct" , (req,res) =>{
    if(req.session.email){
    var pName = req.body.pName ;
    var pDescription = req.body.pDescription ;
    var pType = req.body.pType ;
    var pDate = req.body.pDate ;
    var price = req.body.price;
    var userEmail = req.session.email;

    var p = new products.create( pName, pDescription, pType, pDate, price, userEmail) ;

    // send res to FE
    }

    else{
        res.status(403).send("Access denied");
    }

})