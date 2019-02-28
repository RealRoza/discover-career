import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpParams, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  baseUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  uploadPhoto(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('File', file);
    const params = new HttpParams();

    const options = {
      params: params,
      reportProgress: true,
      withCredentials: false,
    };
    const req = new HttpRequest('POST', this.baseUrl + 'Photo', formData, options);
    return this.http.request(req);
  }
}
