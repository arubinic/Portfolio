import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardModel } from '../models/card-model';

@Component({
  selector: 'app-box-link',
  templateUrl: './box-link.component.html',
  styleUrls: ['./box-link.component.css']
})
export class BoxLinkComponent implements OnInit {
  @Input() cardData: CardModel;

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  public buttonClick(): void {
    window.scroll(0,0);
    this.router.navigate(['info/'+this.cardData.id]);
  }

}
