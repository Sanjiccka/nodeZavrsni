exports.create = function (pName, pDescription, pType, pDate, price, userEmail) {
    this.pName = pName ;
    this.pDescription = pDescription ;
    this.pType = pType ;
    this.pDate = pDate ;
    this.price = price;
    this.userId =userEmail;
}