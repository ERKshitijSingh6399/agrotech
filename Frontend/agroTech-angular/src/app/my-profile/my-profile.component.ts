import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { Farmer } from '../farmer';
import { FarmerService } from '../farmer.service';
import * as alertyfy from 'alertifyjs';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
	
	constructor(private router:Router,private service:FarmerService){}

	private farmer= new Farmer();

	ngOnInit() {
	  if(!localStorage.getItem('token')){  
		this.router.navigate(['/login']);
	  }else{
		let getUserObj=JSON.parse(localStorage.getItem('token'));  
		this.farmer.farmerId=getUserObj.farmerId;
		this.farmer.farmerName=getUserObj.farmerName;
		this.farmer.contactNumber=getUserObj.contactNumber;
		this.farmer.email=getUserObj.email;
		this.farmer.age=getUserObj.age;
		this.farmer.gender=getUserObj.gender;
		this.farmer.password=getUserObj.password;

		alertyfy.success("You can see Your Details");
	  }

	  
	}

	id  : number= this.farmer.farmerId;

	@Output() idEvent = new EventEmitter<number>();

	sendId(){
		this.idEvent.emit(this.id)
	}

}
