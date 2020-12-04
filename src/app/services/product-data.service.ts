import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product-list/Product';
import { tap } from 'rxjs/operators';

const URL = "https://5f87805549ccbb00161775ca.mockapi.io/api/v1/beers"

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(URL)
              .pipe(
                tap((prods: Product[]) => prods.forEach(prod => prod.quantity = 0)) 
               );
  }
}
