
export class Product {
    productId : number;
    productName : String;
    productMethod : String;
    productPrice : number;
    productWeight : String;
    productLink:String;
    constructor(productId:number, productName:String,productMethod:String, productPrice:number, productWeight : String, productLink:String){
        this.productId = productId;
        this.productName = productName;
        this.productMethod = productMethod;
        this.productPrice = productPrice;
        this.productWeight = productWeight;
        this.productLink = productLink;
    }
}
