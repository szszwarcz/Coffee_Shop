import { Component } from '@angular/core';
import { Product } from '../product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  cartItems:Product[] = [];
  sum:number = 0;
  constructor(private cartService : CartService){
    this.cartItems = cartService.getCartItems();
    
  }

  onMouseOver(){
    this.sum = this.cartService.sumPrice;
  }
  
}
