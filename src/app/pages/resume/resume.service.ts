import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Resume} from './resume.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  userUrl = environment.apiBaseUrl;
  constructor(protected http: HttpClient) { }
  resumeList(): Observable<Resume[]> {
    return this.http.get<Resume[]>(this.userUrl + 'resumes');
  }
  resumeFilter(search: {keywords: string, location: string}): Observable<Resume[]> {
    return this.http.get<Resume[]>(this.userUrl + 'resumes/search?key='
      + search.keywords + '&location' + search.location );
  }
  resumeById(id: number): Observable<Resume> {
    return this.http.get<Resume>(this.userUrl + 'resumes/' + id);
  }
}
