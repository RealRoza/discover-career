import { Component, OnInit } from '@angular/core';
import {Resume, ResumeCategoryDeatil} from '../resume.model';
import {ResumeService} from '../resume.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-resume-list',
  templateUrl: './resume-list.component.html',
  styleUrls: ['./resume-list.component.scss']
})
export class ResumeListComponent implements OnInit {

  resumeList: Resume[];
  constructor(private resumeService: ResumeService) { }

  ngOnInit() {
    this.getResumeList();
  }
  getResumeList() {
    this.resumeService.resumeList().subscribe(
      (data: Resume[]) => { this.resumeList = data;
      console.log('parents', this.resumeList);
      console.log('property', this.resumeList[0].location); }
    );
  }
  getResumeFilter(search: {keywords: string, location: string}) {
    this.resumeService.resumeFilter(search).subscribe(
      (data: Resume[]) => { this.resumeList = data;
      console.log('search', this.resumeList); }
    );
  }
  onSubmit(formObj: NgForm) {
    let searchObj: {keywords: string, location: string};
    searchObj = formObj.value;
    this.getResumeFilter(searchObj);
  }

}
