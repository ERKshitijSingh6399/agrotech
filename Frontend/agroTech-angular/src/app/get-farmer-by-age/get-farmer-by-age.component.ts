import { Component, OnInit } from '@angular/core';
import { Farmer } from '../farmer';
import { FarmerService } from '../farmer.service';

@Component({
  selector: 'app-get-farmer-by-age',
  templateUrl: './get-farmer-by-age.component.html',
  styleUrls: ['./get-farmer-by-age.component.css']
})
export class GetFarmerByAgeComponent implements OnInit {
  
  age :number;

  private farmers :Farmer [];
  constructor(private service : FarmerService) { }

  ngOnInit() {
    this.service.getAllFarmerByAge(this.age).subscribe(res=>{
      this.farmers=res;
    })
  }
}
