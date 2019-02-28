import { Component, OnInit } from '@angular/core';
import {CompaniesService} from '../companies.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Company, Industry, Photo} from '../company.model';
import {Job, JobCategoryDetails} from '../../jobs/job.model';

@Component({
  selector: 'app-companies-detail',
  templateUrl: './companies-detail.component.html',
  styleUrls: ['./companies-detail.component.scss']
})
export class CompaniesDetailComponent implements OnInit {

  companyDetail: Company;
  photo: Photo;
  industry: Industry;
  jobs: Job[];
  constructor(private companyService: CompaniesService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.companyDetail = {} as Company;
    this.photo = {} as Photo;
    this.industry = {} as Industry;
    this.jobs = {} as Job[];
    this.getCompanyById();
  }
  getCompanyById() {
    this.companyService.companyById(+this.route.snapshot.params['id']).subscribe(
      (data: Company) => {
        this.companyDetail = data;
      },
      error1 => {
        console.log(error1.message);
      },
      () => {
        // this.jobCategoryDetail = this.companyDetail.jobs[0].jobCategoryDetail;
        // console.log('jobCategory', this.jobCategoryDetail);
        this.photo = this.companyDetail.photo;
        this.industry = this.companyDetail.industry;
        this.jobs = this.companyDetail.jobs;
        console.log('url', this.photo.url);
        console.log('company', this.companyDetail);
      }
    );
  }

}
