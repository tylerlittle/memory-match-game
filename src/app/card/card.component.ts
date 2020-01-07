import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})
export class CardComponent implements OnInit {
  // public properties
  isBack = false;

  // private fields

  constructor() {}

  ngOnInit() {}

  // public methods
  flipCard() {
    this.isBack = !this.isBack;
  }

  // private methods
}
