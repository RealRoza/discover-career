import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {CareerLevel, Job, JobCategory, JobType, Qualification} from '../jobs/job.model';
import {Industry} from '../companies/company.model';

@Injectable({
  providedIn: 'root'
})
export class PostJobService {
  userUrl = environment.apiBaseUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  constructor(protected http: HttpClient) {
  }
  jobType(): Observable<JobType[]> {
    return this.http.get<JobType[]>(this.userUrl + 'jobs/jobtype');
  }
  jobCategory(): Observable<JobCategory[]> {
    return this.http.get<any[]>(this.userUrl + 'jobs/jobcategory');
  }
  careerLevel(): Observable<CareerLevel[]> {
    return this.http.get<any[]>(this.userUrl + 'jobs/careerlevel');
  }
  qualification(): Observable<Qualification[]> {
    return this.http.get<any[]>(this.userUrl + 'jobs/qualification');
  }
  industry(): Observable<Industry[]> {
    return this.http.get<any[]>(this.userUrl + 'company/industry');
  }
  postJob(obj: any): Observable<any> {
    return this.http.post(this.userUrl + 'jobs/post-job', obj, this.httpOptions);
  }
}
