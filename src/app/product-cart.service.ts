import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product-list/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {

  constructor() { }
  private _carList: Product[] = [];
  cartList: BehaviorSubject<Product[]> = new BehaviorSubject([]);


  addToCart(prod: Product) {
    let item: Product = this._carList.find((p1) => p1.name == prod.name);
    if(!item){
      this._carList.push({ ... prod});//clona el objeto, vamos a poder compartir la misma info del prod
    }
    else {
      item.quantity += prod.quantity;
    }
    console.log(this._carList);
    this.cartList.next(this._carList);
  }

}
