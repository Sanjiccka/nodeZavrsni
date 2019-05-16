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

var usersSchema = new Schema ({
    fn: {type: String},
    ln: {type: String},
    email: { type: String},
    bd: {type: Number},
    tel: {type: Number},
    country: {type: String},
    pass:{type:String}
});


var User = mongoose.model("User", usersSchema);

module.exports = User;