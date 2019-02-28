import { Component, OnInit } from '@angular/core';
import {Job} from '../job.model';
import {JobsService} from '../jobs.service';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.scss']
})
export class JobsListComponent implements OnInit {

  jobList: Job[];
  jobFilters: Job[];
  keywords: string;
  location: string;
  constructor(protected jobsService: JobsService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.onStart();
    if (!this.isSearch(this.keywords, this.location)) {
      this.getJobList();
    } else {
      this.getJobsFilter({keywords: this.keywords, location: this.location});
    }
  }
  getJobList() {
    this.jobsService.jobList().subscribe(
      (data: Job[]) => { this.jobList = data; console.log(this.jobList); },
    );
  }
  getJobsFilter(search: {keywords: string, location: string}) {
    this.jobsService.jobsFilter(search).subscribe(
    (data: Job[]) => { this.jobFilters = data;
    console.log('filter', this.jobFilters);
    this.jobList = this.jobFilters; }
    );
  }
  onSubmit(formObj: NgForm) {
    let searchObj: {keywords: string, location: string};
    searchObj = formObj.value;
    this.getJobsFilter(searchObj);
  }
  onStart() {
    this.activatedRoute.queryParams.subscribe(
      (params: Params) => {
        this.keywords = params['key'];
        this.location = params['location'];
        // if (this.isSearch(this.keywords, this.location)) {
        //   this.getJobsFilter({keywords: this.keywords, location: this.location});
        // }
      },
      error1 => {
        console.log(error1.message);
      }
    );
  }
  isSearch(key: string, location: string) {
    if (key == null && location == null) {
      return false;
    } else {
      return true;
    }
  }

}
