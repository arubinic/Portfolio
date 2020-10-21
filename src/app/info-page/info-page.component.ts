import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { InfoModel } from '../Models/info-model';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.css']
})
export class InfoPageComponent implements OnInit {
  info: InfoModel

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.dataService.getInfo(id)
      .subscribe(info => this.info = info);
  }

}
