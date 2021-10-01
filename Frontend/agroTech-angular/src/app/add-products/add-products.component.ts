import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from '../products';
import { ProductsService } from '../products.service';
import * as alertyfy from 'alertifyjs';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent {

  product : Products;
  constructor(private service : ProductsService,private router : Router) {
    this.product=new Products();
   }

   public addProduct(){
     this.service.addProduct(this.product).subscribe(res=>{
       this.product=new Products();
       this.router.navigate(['/products']);
       alertyfy.success("Successfully Added Products");
     })
   }

}


