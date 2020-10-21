import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background-image',
  templateUrl: './background-image.component.html',
  styleUrls: ['./background-image.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ]),
]
})
export class BackgroundImageComponent implements OnInit {
  title = 'Adam Rubinic';
  titleSubtext = 'Illustrator & Graphic Designer';
  paragraph = "Hello there! I’m Adam Rubinic, a graphic designer based in New England with an eye for detail and experience with programs needed to get the job done. I’ve had experience in both high school and college working towards the field of graphic design, giving me around 7 years of active learning experience outside of a common workplace. I believe my greatest asset to be my illustrator work, where I can express my eye for both major and minor detail, as well as complex coloration for different atmospheres and moods. I’ve also obtained experience in many design projects, as well as having worked with font development, programming, and layout development.";
  load_completed = false;

  constructor() { }

  ngOnInit(){
  }

  ngAfterViewInit(){
    this.load_completed = true;
  }
}
