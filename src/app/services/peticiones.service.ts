import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  url = 'http://34.70.190.6/api/';

  constructor(private http: HttpClient) {

  }

  get(uri: string, headers?: HttpHeaders): Observable<any> {
    return this.http.get(this.url + uri, { observe: 'response', headers });
  }

  post(uri: string, data: any, headers?: HttpHeaders): Observable<any> {
    return this.http.post(this.url + uri, data, { observe: 'response', headers });
  }

  put(uri: string, data: any, headers?: HttpHeaders): Observable<any> {
    return this.http.put(this.url + uri, data, { observe: 'response', headers });
  }

  delete(uri: string, headers?: HttpHeaders): Observable<any> {
    return this.http.delete(this.url + uri, { observe: 'response', headers });
  }
}
