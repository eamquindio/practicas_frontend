import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  constructor(private http: HttpClient) {

  }


  get(url): Observable<any> {
    return this.http.get(url, { observe: 'response' });
  }


  post(url, data): Observable<any> {
    return this.http.post(url, data, { observe: 'response' });
  }

  put(url, data): Observable<any> {
    return this.http.put(url, data, { observe: 'response' });
  }

  delete(url): Observable<any> {
    return this.http.delete(url, { observe: 'response' });
  }
}
