import { BrewingMethods } from './../brewing-methods';
import { Component } from '@angular/core';

@Component({
  selector: 'app-brewing-methods',
  templateUrl: './brewing-methods.component.html',
  styleUrls: ['./brewing-methods.component.css']
})
export class BrewingMethodsComponent {
  brewingMethods:BrewingMethods[] = [];
  constructor(){
  }
}
