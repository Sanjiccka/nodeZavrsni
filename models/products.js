// exports.create = function (pName, pDescription, pType, pDate, price, userEmail) {
//     this.pName = pName ;
//     this.pDescription = pDescription ;
//     this.pType = pType ;
//     this.pDate = pDate ;
//     this.price = price;
//     this.userId =userEmail;
// }


const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var productSchema = new Schema ({
    pName: {type: String, required: true},
    pDescription: {type: String},
    pType: { type: String},
    pDate: {type: Date, required: true},
    price: {type: Number, required:true},
    userId: {type: String, required:true}
});


var Product = mongoose.model("Product", productSchema);

module.exports = Product;