import { DatePipe } from "@angular/common";
import { Farmer } from "./farmer";
​
export class Query {
    queryId: number;
    farmerquery:Farmer ;
    dateQuery:DatePipe;
    question:string;
    answer:string;
    status: string;
}