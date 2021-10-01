// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-agri-feed',
//   templateUrl: './agri-feed.component.html',
//   styleUrls: ['./agri-feed.component.css']
// })
// export class AgriFeedComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }


import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Query } from './../query';
import { QueryService } from './../query.service';
​
@Component({
  selector: 'app-agri-feed',
  templateUrl: './agri-feed.component.html',
  styleUrls: ['./agri-feed.component.css']
})
export class AgriFeedComponent implements OnInit {
  query = new Query();
  msg = '';
  
  private queries: Query[];
  constructor(private service:QueryService) { }
  ngOnInit() {
    this.service.getAllQueries().subscribe(res => {
      this.queries= res;
      console.log('getting');
    })
  }
​
  addQuery() {
    this.service.addQuery(this.query).subscribe(res =>{ 
      this.query= new Query();     
      console.log('added question');
      
    })
  }
​}