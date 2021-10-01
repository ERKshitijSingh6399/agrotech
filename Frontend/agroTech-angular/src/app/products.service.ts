
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { Products } from './products';
import { Observable } from 'rxjs';
​
​
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url :string;
  constructor(private http : HttpClient) {
    this.url="http://localhost:9100/";
  }
​
  getAllProducts(){
    return this.http.get<any>(this.url+"farmer/getallproducts")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
​

  public addProduct( product : Products) : Observable<Products>{
    return this.http.post<Products>(this.url + "admins/addproduct",product);
  }
  
}