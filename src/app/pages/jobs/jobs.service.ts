import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Job} from './job.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  userUrl = environment.apiBaseUrl;
  constructor(protected http: HttpClient) { }
  jobList(): Observable<Job[]> {
    return this.http.get<Job[]>(this.userUrl + 'jobs');
  }
  jobsFilter(search: {keywords: string, location: string}): Observable<Job[]> {
    console.log('service');
    console.log(search.keywords);
    console.log(search.location);
    return this.http.get<Job[]>(this.userUrl + 'jobs/search?key=' + search.keywords + '&location=' + search.location);
  }
  jobById(id: number): Observable<Job> {
    return this.http.get<Job>(this.userUrl + 'jobs/' + id );
  }
}
