import { Component, OnInit } from '@angular/core';
import {ResumeService} from '../resume.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Education, Experience, Resume, ResumeCategoryDeatil} from '../resume.model';
import {PhotoService} from '../../photo.service';
import {Photo} from '../../companies/company.model';

@Component({
  selector: 'app-resume-detail',
  templateUrl: './resume-detail.component.html',
  styleUrls: ['./resume-detail.component.scss']
})
export class ResumeDetailComponent implements OnInit {

  resume: Resume;
  resumeCategory: ResumeCategoryDeatil[];
  photo: Photo;
  constructor(private resumeService: ResumeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.resume = {} as Resume;
    this.photo = {} as Photo;
    this.getResumeById();
  }
  getResumeById() {
    this.resumeService.resumeById(+this.route.snapshot.params['id']).subscribe(
      (data: Resume) => {
        this.resume = data;
        this.photo = this.resume.photo;
        console.log( 'url', this.resume.photo.url);
      },
      error1 => {
        console.log(error1.message);
      },
      () => {
        console.log(this.resume);
        console.log('category', this.resumeCategory);
      }
    );
  }

}
