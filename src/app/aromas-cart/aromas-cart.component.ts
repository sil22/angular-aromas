import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCartService } from '../product-cart.service';
import { Product } from '../product-list/Product';

@Component({
  selector: 'app-aromas-cart',
  templateUrl: './aromas-cart.component.html',
  styleUrls: ['./aromas-cart.component.css']
})
export class AromasCartComponent implements OnInit {
  
   cartList$: Observable<Product[]>;

  constructor(private cart: ProductCartService) {
    this.cartList$ = cart.cartList.asObservable();
   }

  ngOnInit(): void {
  }

}
