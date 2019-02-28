import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  userUrl = environment.apiBaseUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  constructor(protected http: HttpClient) { }
  postApplication(obj: any): Observable<any> {
    return this.http.post(this.userUrl + 'applications', obj, this.httpOptions);
  }
}
