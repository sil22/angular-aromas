import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductCartService } from '../services/product-cart.service';
import { ProductDataService } from '../services/product-data.service';
import { Product } from './Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private cart: ProductCartService,
    private prodDataService: ProductDataService) {
    }

  ngOnInit(): void {
    this.prodDataService.getAll().subscribe(prods => this.products = prods);
  }

  addToCart(prod): void {
    this.cart.addToCart(prod);
    prod.stock -= prod.quantity;
    prod.quantity = 0;
  }

  maxReached(m: string){
    alert(m);
  }

}
