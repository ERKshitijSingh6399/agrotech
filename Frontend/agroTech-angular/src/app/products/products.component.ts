import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';
import * as alertyfy from 'alertifyjs';
​
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
​
  
  public productList : any ;
  public filterCategory : any
  searchKey:string ="";
  constructor(private api : ProductsService, private cartService : CartService) { }
​
  ngOnInit(): void {
    this.api.getAllProducts()
    .subscribe(res=>{
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
      });
      alertyfy.success("Shop Best Qulity Products");
      console.log(this.productList)
    });
​
    // this.cartService.search.subscribe((val:any)=>{
    //   this.searchKey = val;
    // })
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
  /*filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })*/
}