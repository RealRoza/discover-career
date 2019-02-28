import {Component, OnInit, ViewChild} from '@angular/core';
import {Form, FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {PostJobService} from './post-job.service';
import {CareerLevel, Job, JobCategory, JobCategoryDetails, JobType, Qualification} from '../jobs/job.model';
import {Company, Industry, Photo} from '../companies/company.model';
import {FileUpload} from 'primeng/primeng';
import {PhotoService} from '../photo.service';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.scss']
})
export class PostJobComponent implements OnInit {

  f: FormGroup;
  @ViewChild('fileInput') fileInput: FileUpload;
  photo: Photo;
  jobObj: Job;
  companyObj: Company;
  jobType: JobType[];
  jobCategory: JobCategory[];
  careerLevel: CareerLevel[];
  jobCategoryDetail: JobCategoryDetails[];
  experience = ['0-2 years', '2-3 years', '3-5 year', '5-6 years', '6-7 years',
                '7-8 years', '8-9 years', '9-10 years'];
  qualification: Qualification[];
  industry: Industry[];
  companySize = ['1-49', '50-149', '150-249', '250-449', '500-749', '750-999', '1000+'];
  constructor(protected jobService: PostJobService,
              // public fb: FormBuilder,
              protected photoService: PhotoService) {
  }

  ngOnInit() {
    this.getJobType();
    this.getJobCategory();
    this.getCareerLevel();
    this.getQualification();
    this.getIndustry();
    setTimeout(() => {}, 1000);
    this.generateForm();
    this.jobObj = {} as Job;
  }
  generateForm() {
    this.f = new FormGroup({
      job: new FormGroup({
        jobTitle: new FormControl(),
        location: new FormControl(),
        // jobTag: new FormControl(),
        jobTypeId: new FormControl(),
        jobCategoryDetails: new FormControl(),
        description: new FormControl(),
        mail: new FormControl(),
        closingDate: new FormControl(),
        startDate: new FormControl(),
        salary: new FormControl(),
        careerLevelId: new FormControl(),
        experience: new FormControl(),
        qualificationId: new FormControl(),
        excerpt: new FormControl()
      }),
      company: new FormGroup({
        companyName: new FormControl(),
        companySlug: new FormControl(),
        tagLine: new FormControl(),
        foundtionYear: new FormControl(),
        companyLocation: new FormControl(),
        industryId: new FormControl(),
        companySize: new FormControl(),
        companyMail: new FormControl(),
        companyDescription: new FormControl(),
        facebookUserName: new FormControl(),
        phoneNumber: new FormControl(),
        website: new FormControl(),
        linkedInUserName: new FormControl(),
        video: new FormControl(),
        twitterUserName: new FormControl()
      })
    });
  }
  getJobType() {
    this.jobService.jobType().subscribe(
      (data: JobType[]) => {
        this.jobType = data;
      });
  }
  getJobCategory() {
    this.jobService.jobCategory().subscribe((data: any) => { this.jobCategory = data; });
  }
  getCareerLevel() {
    this.jobService.careerLevel().subscribe((data: any) => { this.careerLevel = data; });
  }
  getQualification() {
    this.jobService.qualification().subscribe((data: any) => { this.qualification = data; });
  }
  getIndustry() {
    this.jobService.industry().subscribe((data: any) => { this.industry = data; });
  }
  onSubmit(formObj: NgForm) {
    if (this.fileInput.files.length === 0) {
      return;
    }
    let file: File = this.fileInput.files[0];
    this.photoService.uploadPhoto(file).subscribe(
      (res) => {
        if (!res.body) {
          console.log('gg');
        } else {
          this.photo = res.body;
        }
      },
      (err) => {
        console.log('Upload Error:', err);
      },
      () => this.addJob(this.photo.photoId, formObj)
    );
  }
  addJob(photoId: number, formObj: NgForm) {
    this.jobObj = formObj.controls.job.value;
    this.companyObj = formObj.controls.company.value;
    this.companyObj.photoId = photoId;
    this.jobObj.employerId = '0';
    const containerObj = {job: this.jobObj, com: this.companyObj};
    this.jobService.postJob(containerObj).subscribe();
  }
}
