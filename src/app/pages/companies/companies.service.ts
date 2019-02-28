import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Company} from './company.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  userUrl = environment.apiBaseUrl;
  constructor(protected http: HttpClient) { }
  companyList(): Observable<Company[]> {
    return this.http.get<Company[]>(this.userUrl + 'company');
  }
  companyById(id: number): Observable<Company> {
    return this.http.get<Company>(this.userUrl + 'company/' + id);
  }
  companyFilter(key: string, location: string): Observable<Company[]> {
    return this.http.get<Company[]>(this.userUrl + 'company/search?key=' + key + '&location' + location);
  }
}
