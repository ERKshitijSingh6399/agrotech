import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Information } from '../information';
import { InformationService } from '../information.service';
import * as alertyfy from 'alertifyjs';

@Component({
  selector: 'app-add-information',
  templateUrl: './add-information.component.html',
  styleUrls: ['./add-information.component.css']
})
export class AddInformationComponent  {


  information : Information
  constructor(private service : InformationService,private router : Router) {
    this.information=new Information();
   }

  public addInformation(){
    this.service.addInformation(this.information).subscribe(res=>{
      this.information=new Information();
      this.router.navigate(['/learn']);
      alertyfy.success("Successfully Added Information");
    })
  }

}
