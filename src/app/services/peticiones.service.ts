import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  url = environment.MICROSERVICE_URL;

  constructor(private http: HttpClient) {

  }

  get(uri: string, headers?: HttpHeaders): Observable<any> {
    return this.http.get(this.url + uri, { observe: 'response', headers });
  }

  post(uri: string, data: any, headers?: HttpHeaders): Observable<any> {
    console.log(this.url + uri);
    return this.http.post(this.url + uri, data, { observe: 'response', headers });
  }

  put(uri: string, data: any, headers?: HttpHeaders): Observable<any> {
    return this.http.put(this.url + uri, data, { observe: 'response', headers });
  }

  delete(uri: string, headers?: HttpHeaders): Observable<any> {
    return this.http.delete(this.url + uri, { observe: 'response', headers });
  }
}
