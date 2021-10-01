import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Farmer } from '../farmer';
import { FarmerService } from '../farmer.service';
import * as alertyfy from 'alertifyjs';

@Component({
  selector: 'app-delete-farmer',
  templateUrl: './delete-farmer.component.html',
  styleUrls: ['./delete-farmer.component.css']
})
export class DeleteFarmerComponent   {
  
  farmer = new Farmer();

  constructor(private service: FarmerService, private router :Router) { }


  public deleteFarmer(){
  
    this.service.deleteFarmer(this.farmer.farmerId).subscribe(res=>{
    this.router.navigate(['/viewAllFarmers']);
    alertyfy.success("Deleted Successfully");
    })
  
  }


}
