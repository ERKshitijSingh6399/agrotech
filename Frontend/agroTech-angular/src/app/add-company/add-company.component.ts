import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Companies } from '../companies';
import { CompaniesService } from '../companies.service';
import * as alertyfy from 'alertifyjs';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent {


   companies : Companies;
  constructor(private service : CompaniesService, private router : Router) {
    this.companies= new Companies();
   }

  public addCompany(){
    this.service.addCompany(this.companies).subscribe(res=>{
      this.companies=new Companies();
      this.router.navigate(['/viewCompany']);
      alertyfy.success("Successfully Added A Company");
    })
  }

}
