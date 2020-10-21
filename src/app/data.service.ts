import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { CardData } from './data/card-data';

import { InfoData } from './data/info-data';
import { CardModel } from './models/card-model';
import { InfoModel } from './Models/info-model';

@Injectable({ providedIn: 'root' })
export class DataService {

  constructor() { }

  getInfo(id:string): Observable<InfoModel> {
    return of(InfoData.DATA[id]);
  }

  getCards(): Observable<CardModel[]> {
    return of(CardData.DATA);
  }
}