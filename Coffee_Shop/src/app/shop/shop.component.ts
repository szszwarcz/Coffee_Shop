import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent {
  coffee = [
    {
      id: 1,
      name: 'Ethiopia Koke',
      method: 'Washed',
      price: 44,
      weight: '250g',
      link: 'https://palarniakafar.pl/wp-content/uploads/2023/07/palarnia-kafar-etiopia-koke.webp'
    },
    {
      id: 2,
      name: 'Rwanda Kopakama',
      method: 'Honey',
      price: 59,
      weight: '250g',
      link: 'https://palarniakafar.pl/wp-content/uploads/2023/07/palarnia-kafar-rwanda-kopakama.webp'
    },
    {
      id: 3,
      name: 'Indie Ratnagiri',
      method: 'FW Double Fermented',
      price: 49,
      weight: '250g',
      link: 'https://palarniakafar.pl/wp-content/uploads/2023/04/palarnia-kafar-indie-ratnagiri-1.webp'
    },
    {
      id: 3,
      name: 'Etiopia Kokose',
      method: 'Honey',
      price: 65,
      weight: '250g',
      link: 'https://palarniakafar.pl/wp-content/uploads/2023/06/palarnia-kafar-etiopia-kokose.webp'
    }
  ];
}
