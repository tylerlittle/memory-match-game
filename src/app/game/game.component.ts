import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  numbers: any = [
    { id: 1, value: '1', class: 'no-match' },
    { id: 2, value: '1', class: 'no-match' },
    { id: 3, value: '2', class: 'no-match' },
    { id: 4, value: '2', class: 'no-match' },
    { id: 5, value: '3', class: 'no-match' },
    { id: 6, value: '3', class: 'no-match' },
    { id: 7, value: '4', class: 'no-match' },
    { id: 8, value: '4', class: 'no-match' },
    { id: 9, value: '5', class: 'no-match' },
    { id: 10, value: '5', class: 'no-match' },
    { id: 11, value: '6', class: 'no-match' },
    { id: 12, value: '6', class: 'no-match' },
    { id: 13, value: '7', class: 'no-match' },
    { id: 14, value: '7', class: 'no-match' },
    { id: 15, value: '8', class: 'no-match' },
    { id: 16, value: '8', class: 'no-match' }
  ];
  selectedCardFirst = null;
  selectedCardSecond = null;

  constructor() {}

  ngOnInit() {
    this.shuffleArray(this.numbers);
  }

  onCardClick(id: number) {
    const cardIndex = this.numbers.findIndex(
      (item: { id: number }) => item.id === id
    );
    const card = this.numbers[cardIndex];
    if (this.selectedCardFirst === card || card.class === 'match') {
      return;
    }
    if (!this.selectedCardFirst) {
      this.selectedCardFirst = card;
      this.numbers[cardIndex].class = 'partial';
    } else if (!this.selectedCardSecond) {
      this.selectedCardSecond = card;
      this.numbers[cardIndex].class = 'partial';
    }

    if (this.selectedCardFirst && this.selectedCardSecond) {
      setTimeout(() => {
        const firstCardIndex = this.numbers.findIndex(
          (item: { id: number }) => item.id === this.selectedCardFirst.id
        );
        if (this.selectedCardFirst.value === this.selectedCardSecond.value) {
          this.numbers[firstCardIndex].class = 'match';
          this.numbers[cardIndex].class = 'match';
          this.selectedCardFirst = null;
          this.selectedCardSecond = null;
        } else {
          this.numbers[firstCardIndex].class = 'no-match';
          this.numbers[cardIndex].class = 'no-match';
          this.selectedCardFirst = null;
          this.selectedCardSecond = null;
        }
      }, 500);
    }
  }

  shuffleArray(arr: any) {
    // https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
    let j: number;
    let x: number;
    let i: number;
    for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = arr[i];
      arr[i] = arr[j];
      arr[j] = x;
    }
    return arr;
  }
}
