import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  url = environment.MICROSERVICE_URL;

  constructor(private http: HttpClient,private router: Router) {

  }

  get(uri: string, headers?: HttpHeaders): Observable<any> {
    if(this.authorizationToken()){
    return this.http.get(this.url + uri, { observe: 'response', headers });
    }
  }

  post(uri: string, data: any, headers?: HttpHeaders): Observable<any> {
    if(this.authorizationToken()){
    return this.http.post(this.url + uri, data, { observe: 'response', headers });
    }
  }

  put(uri: string, data: any, headers?: HttpHeaders): Observable<any> {
    if(this.authorizationToken()){
    return this.http.put(this.url + uri, data, { observe: 'response', headers });
    }
  }

  delete(uri: string, headers?: HttpHeaders): Observable<any> {
    if(this.authorizationToken()){
    return this.http.delete(this.url + uri, { observe: 'response', headers });
    }
  }

  private authorizationToken():boolean {
    var token = localStorage.getItem('jwt');
    var usuario = localStorage.getItem('user');

    if (token == '' || usuario == '') {
      this.router.navigate(['login']);
    }
    return true;
  }

}
