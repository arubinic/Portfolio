import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { CardModel } from '../models/card-model';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  cardData: CardModel[]

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.getCards();
  }
  
  getCards(): void {
    this.dataService.getCards()
      .subscribe(cards => this.cardData = cards);
  }
}
