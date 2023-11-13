import { Product } from '../product';
import { CartService } from './../cart.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  products:Product[] = [];
  constructor(private cartService:CartService){
  this.products = this.cartService.getCartItems();
  }
}
