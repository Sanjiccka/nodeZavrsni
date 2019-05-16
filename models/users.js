// exports.create = function (fn, ln, email, bd, tel, country, pass) {
//     this.fn = fn ;
//     this.ln = ln ;
//     this.email = email ;
//     this.bd = bd ;
//     this.tel = tel;
//     this.country = country;
//     this.pass = pass ;
// }


const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var userSchema = new Schema ({
    fn: {type:String, required: true},
    ln: {type:String, required: true},
    email: { type:String, required:true},
    bd: {type:Date, required:true},
    tel: {type:Number, required:true},
    country: {type:String, required:true},
    pass: { type:String, required:true}
})