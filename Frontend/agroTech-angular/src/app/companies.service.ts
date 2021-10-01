import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Companies } from './companies';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  private url :string;

  constructor(private http: HttpClient) { 
    this.url="http://localhost:9100/";
  }

  
  public addCompany( companies : Companies) : Observable<Companies>{
    return this.http.post<Companies>(this.url + "admins/addcompanydemand",companies);
  }

  public getAllCompanies(): Observable<Companies[]>{
    return this.http.get<Companies[]>(this.url+"farmer/getallcompanies")
  }
}
