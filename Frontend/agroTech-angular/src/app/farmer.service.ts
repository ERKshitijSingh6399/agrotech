import { Injectable } from '@angular/core';
import { Farmer } from './farmer';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FarmerService {
  private url :string;

  constructor(private http: HttpClient) { 
    this.url="http://localhost:9100/";
  }

  
  public registerFarmer( farmer : Farmer) : Observable<Farmer>{
    return this.http.post<Farmer>(this.url + "farmer/registerfarmer",farmer);
  }

  public loginFarmer(farmer:Farmer) :Observable <any> {
    return this.http.post<any>(this.url+"farmer/logincheck", farmer);
  }

  public updateFarmer(farmer :Farmer): Observable<Farmer> {
    return this.http.put<Farmer>(this.url + "farmer/updatefarmer", farmer);
  }
  public deleteFarmer(farmerId: number){
    return this.http.delete(this.url + "farmer/deletefarmer/"+farmerId);
  }

  

  public getAllFarmers(): Observable<Farmer[]>{
    return this.http.get<Farmer[]>(this.url+"admins/getallfarmers")
  }

  public getAllFarmerByAge(age :number): Observable<Farmer[]>{
    return this.http.get<Farmer[]>(this.url+"admins/getfarmersbyage/"+age)
  }
 

  


}
