import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  // public properties
  @Input() cardObject: any;
  @Output() cardClickEE = new EventEmitter();

  // private fields

  constructor() {}

  ngOnInit() {}

  // public methods
  onClick() {
    this.cardClickEE.emit(this.cardObject.id);
  }

  // private methods
}
