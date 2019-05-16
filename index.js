const express = require("express");
var app = express();
const myParser = require("body-parser");
app.use(myParser.urlencoded({ extended: true }));
const db = require("./connection");

const User = require("./models/users.js");

const session = require("express-session");
app.use(session({ secret: "test" }));
const Products = require("./models/products");


app.listen(3000);






app.get("/", (req,res) =>{
    res.send("Hello");
})


app.post("/register", (req, res, next) => {
    var fn = req.body.fn;
    var ln = req.body.ln;
    var email = req.body.email;
    var bd = req.body.bd;
    var tel = req.body.tel;
    var country = req.body.country;
    var pass = req.body.pass;

    let user = new User ({
        fn: fn,
        ln: ln,
        email: email,
        bd: bd,
        tel: tel,
        country: country,
        pass: pass
    })


user.save(function(err){
    if(err) {
        return next(err);
    }
    else{
        res.send("User saved");
    }
})

});


app.get("/products" , (req,res,next) =>{
  Products.find({}, function(err, products){
      if(err) {
          return next (err);
      }

      res.send(products);
  })

})




// app.post("/login", (req, res) => {
//     var email = req.body.emailLogin;
//     var pass = req.body.passLogin;

//     // database cheks

//     req.session.user = email;

//     //  return res from FE 

// })


// app.post("/newProduct" , (req,res) =>{
//     // if(req.session.email){
//     var pName = req.body.pName ;
//     var pDescription = req.body.pDescription ;
//     var pType = req.body.pType ;
//     var pDate = req.body.pDate ;
//     var price = req.body.price;
//     var userEmail = req.session.email;


//     // send res to FE
//     // }

//     else{
//         res.status(403).send("Access denied");
//     }

// });



