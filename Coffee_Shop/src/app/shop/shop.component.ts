import { Component } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent {
  coffee:Product[] = [];
  constructor(
    private route:ActivatedRoute,
    private cartService : CartService
  ){
  
    this.coffee.push(new Product(1, 'Ethiopia Koke','Washed',44,'250g','https://palarniakafar.pl/wp-content/uploads/2023/07/palarnia-kafar-etiopia-koke.webp'));
    this.coffee.push(new Product(2, 'Rwanda Kopakama','Honey',59,'250g','https://palarniakafar.pl/wp-content/uploads/2023/07/palarnia-kafar-rwanda-kopakama.webp'));
    this.coffee.push(new Product(3, 'Indie Ratnagiri','FW Double Fermented',49,'250g','https://palarniakafar.pl/wp-content/uploads/2023/04/palarnia-kafar-indie-ratnagiri-1.webp'));
    this.coffee.push(new Product(4, 'Etiopia Kokose','Honey',65,'250g','https://palarniakafar.pl/wp-content/uploads/2023/06/palarnia-kafar-etiopia-kokose.webp'));

  }
  
  addToCart(product:Product){
    this.cartService.addProductToCart(product);
  }
}
