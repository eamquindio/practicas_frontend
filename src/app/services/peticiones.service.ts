import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  constructor(private http: HttpClient) {

  }


  get(url:string, headers?:HttpHeaders): Observable<any> {
    return this.http.get(url, { observe: 'response', headers: headers });
  }

  post(url:string, data:any, headers?:HttpHeaders): Observable<any> {
    return this.http.post(url, data, { observe: 'response', headers: headers });
  }

  put(url:string, data:any, headers?:HttpHeaders): Observable<any> {
    return this.http.put(url, data, { observe: 'response', headers: headers });
  }

  delete(url:string, headers?:HttpHeaders): Observable<any> {
    return this.http.delete(url, { observe: 'response', headers: headers });
  }
}
