import { Component, OnInit } from '@angular/core';
import { InfoModel } from '../models/info-model';

export class InfoData{
    public static DATA: Record<string, InfoModel> = {
        "illustrator": { 
            title: "Illustrator Work",
            description: "My program of comfort, as well as what I believe I excel at, is work done in Adobe Illustrator, with fine lines and defined colors to create images that pop. Many projects were intended for posters, one such being an interactable jellyfish exhibit in an aquarium with the user experience in mind. The illustrations of the animals were also drawn by me for the project.",
            titleImage: "assets/illustratorcard.png",
            allImage: [
                
                "assets/full-poster.png",
                "assets/fullparthenon.png",
                "assets/pumpkin.png",
                "assets/jellypage1.png",
                "assets/jellyselect.png",
                "assets/startingscreen.png"
            ]
        },
        "adobecasebook": { 
            title: "Adobe Casebook",
            description: "One of the aforementioned design projects I have worked on in the past was a casebook assignment for Adobe. I was on the team for tactics, who were in charge of deciding what work would be done at what times during the advertising campaign, creating mockups for certain events and advertisements, as well as going in-depth about what tactic should be addressed to who.",
            titleImage: "assets/infoadobe.png",
            allImage: [
                
                "assets/subway-ad-size.png",
                "assets/tactics.PNG",
                "assets/convention.png",
                "assets/luncheon.png"
            ]
        },
        
        "websitedesign": { 
            title: "Website Design",
            description: "The website that is this portfolio was created from scratch using angular programming and CSS. I’ve developed my programming skills both through classes and on my own time. Although this isn’t my design skills, I’ve worked to make sure I have a modern understanding and ability with programming so as to assist with my website designs. I’ve also worked to understand the user interface when it comes to articles and sites such as these, understanding placement of elements and size of text for different screens.",
            titleImage: "assets/infoadobe.png",
            allImage: [
                
                "assets/subway-ad-size.png",
                "assets/tactics.PNG",
                "assets/convention.png",
                "assets/luncheon.png"
            ]
        },
    };
}

