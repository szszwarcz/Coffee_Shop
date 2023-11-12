import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems : Product[] = [];
  sumPrice : number = 0;


  addProductToCart(product: Product){
    this.cartItems.push(product);
    this.sumPrice += product.productPrice;
    return this.sumPrice;
  }
  removeProductFromCart(product:Product){
    this.cartItems.pop;
  }
  getCartItems(){
    return this.cartItems;
  }
  clearCart(){
    this.cartItems = [];
    return this.cartItems;
  }
  constructor() {}
}
