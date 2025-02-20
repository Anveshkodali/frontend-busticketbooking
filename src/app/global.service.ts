import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  readonly APIUrl = "https://localhost:7248/api/Bus"
  constructor (private http:HttpClient){}
    getBusDetails(): Observable<any> {
      return this.http.get<any>(this.APIUrl);
    }
}
