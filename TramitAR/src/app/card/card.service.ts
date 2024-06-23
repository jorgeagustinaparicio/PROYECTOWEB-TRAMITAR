// src/app/card/card.service.ts
import { Injectable } from '@angular/core';
import { Card } from '../card/card.component';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  constructor() { }

  getCards(): Card[] {
    return [
      { title: 'Card 1', text: 'This is card 1', imageUrl: 'https://via.placeholder.com/150' },
      { title: 'Card 2', text: 'This is card 2', imageUrl: 'https://via.placeholder.com/150' },
      { title: 'Card 3', text: 'This is card 3', imageUrl: 'https://via.placeholder.com/150' }
    ];
  }
}
