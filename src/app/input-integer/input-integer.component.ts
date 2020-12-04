import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.css']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }
  
  @Input()
  quantity: number;

  @Input()
  max: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxChange: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }
  decreaseQuantity(): void {
    if(this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  increaseQuantity(): void {
    if(this.quantity < this.max){
      this.quantity++;
      console.log(this.quantity);
      
      this.quantityChange.emit(this.quantity);
    }
    else {
      this.maxChange.emit("Se alcanzó el maximo");
    }
  }
  
}
