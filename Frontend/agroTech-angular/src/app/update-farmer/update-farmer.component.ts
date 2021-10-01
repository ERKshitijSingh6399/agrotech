import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Farmer } from '../farmer';
import { FarmerService } from '../farmer.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-farmer',
  templateUrl: './update-farmer.component.html',
  styleUrls: ['./update-farmer.component.css']
})
export class UpdateFarmerComponent{
  
  farmer : Farmer;
  constructor(private service: FarmerService,private router :Router) { 
    this.farmer=new Farmer();
  }

  public updateFarmer(){
    this.service.updateFarmer(this.farmer).subscribe(res=>{
      console.log(res);
    })
    this.router.navigate(['/myProfile']);
  }

}
