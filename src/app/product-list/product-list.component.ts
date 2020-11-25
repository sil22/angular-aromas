import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from './Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [
    {
      name: "Mango y Pomelo rosado",
      type: "Difusor",
      price: 123,
      stock: 10,
      image: "assets/img/mango.jpeg",
      clearance: false,
      quantity: 0,
    },
    {
      name: "Lima Limon",
      type: "Difusor",
      price: 123,
      stock: 5,
      image: "assets/img/limon.jpeg",
      clearance: true,
      quantity: 0,
    },
    {
      name: "Mora y frambuesa",
      type: "Difusor",
      price: 123,
      stock: 0,
      image: "assets/img/moraframbuesa.jpeg",
      clearance: false,
      quantity: 0,
    }
  ]
  @Input() quantity: number = 0;
  //@Input()  currentStock: number;

  @Output() quantChange = new EventEmitter<number>();
  //@Output() maxQuatity = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  decreaseQuantity(prod : Product): void {
    
    if(prod.quantity > 0) 
      prod.quantity--;
    
    /*if(this.quant > 0)
      this.quant--;
      this.quantChange.emit(this.quant);*/
  }

  increaseQuantity(prod : Product): void {
    if(prod.quantity < prod.stock)
      prod.quantity++;

/*    if(this.quant < 5)
      this.quant++;
      this.quantChange.emit(this.quant);*/
  }

}
