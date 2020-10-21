import { Component, OnInit } from '@angular/core';
import { CardModel } from '../models/card-model';

export class CardData{
    public static DATA: CardModel[] = [
        {
            image: "assets/snowflakeCard.png",
            text: "Illustrator Work",
            id: "illustrator"
        },
        {
            image: "assets/adobecard.png",
            text: "Adobe Casebook",
            id: "adobecasebook"
        },
        {
            image: "assets/webcard.png",
            text: "Website Design",
            id: "websitedesign"
        },
        {
            image: "assets/combinedcard.png",
            text: "Type and Logo Work",
            id: "websiteDesign"
        },
    ];
}