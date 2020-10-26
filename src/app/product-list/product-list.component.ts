import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  beer = {
    "name": "Negra Fuerte",
    "type": "Porter",
    "price": 123,
    "stock": 10,
    "image": "assets/img/porter.jpg"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
