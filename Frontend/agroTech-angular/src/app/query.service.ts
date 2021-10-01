import { Injectable } from '@angular/core';
import { Query } from './query';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { query } from '@angular/animations';
​
@Injectable({
  providedIn: 'root'
})
export class QueryService {
  private url :string;
  
  constructor(private http: HttpClient) {
    this.url="http://localhost:9100/farmer";
  }
  
​
  public addQuery(query:Query)  : Observable<Query>{
    return this.http.post<Query>(this.url + "/askquery",query);
  }
  public getAllQueries(): Observable<Query[]> {
    return this.http.get<Query[]>(this.url + "/getallqueries");
  }
}
