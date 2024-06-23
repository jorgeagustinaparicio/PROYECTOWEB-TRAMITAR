import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

}

// src/app/card/card.model.ts
export interface Card {
  title: string;
  text: string;
  imageUrl: string;
}

