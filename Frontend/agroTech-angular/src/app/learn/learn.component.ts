import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { Information } from '../information';
import { InformationService } from '../information.service';
import * as alertyfy from 'alertifyjs';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {

  private information : Information[];
  constructor( private service : InformationService) { 

  }

  ngOnInit() {
    this.service.getAllInformation().subscribe(res =>{
      this.information= res;
      alertyfy.success("Learn How to Grow The Crops With Best Output");
    })
  }
}
