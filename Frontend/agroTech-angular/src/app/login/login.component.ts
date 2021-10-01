import { Component, OnInit } from '@angular/core';

import { Farmer } from '../farmer';
import { FarmerService } from './../farmer.service';
import { Router } from '@angular/router';
import * as alertyfy from 'alertifyjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent{
  farmer = new Farmer();
  msg = "";
  flag: boolean=false;
  

  constructor(private _service: FarmerService, private route: Router) { }

  public loginFarmer() {
    this._service.loginFarmer(this.farmer).subscribe(
      data => {
        console.log("response received");
        localStorage.setItem('token',JSON.stringify(data));
        // var obj=JSON.parse(localStorage.getItem('token'));
        // if(obj!=null){
        this.route.navigate(['/home']);
         alertyfy.success("Successfully Loged In");
        
      },
      
      error => {
        console.log("exception occured");
        
        this.flag = true;
        this.msg = "Bad Credentials, Please enter valid email & password";
        alertyfy.error("Enter Valid Credentials");

        
        
      }
    )
  }
}