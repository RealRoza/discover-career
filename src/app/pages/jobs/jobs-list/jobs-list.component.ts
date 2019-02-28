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
    // this.getJobList();

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
        // let search: {keywords: string, location: string};
        // search.keywords = this.keywords;
        // search.location = this.location;
        this.getJobsFilter({keywords: this.keywords, location: this.location});
        // console.log('jobs');
        // console.log('key', this.keywords);
        // console.log('location', this.location);
      },
      error1 => {
        console.log(error1.message);
      }
    );
  }

}
