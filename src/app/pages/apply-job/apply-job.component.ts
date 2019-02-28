import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {NgForm} from '@angular/forms';
import {ApplicationService} from './application.service';
import {Job} from '../jobs/job.model';

@Component({
  selector: 'app-apply-job',
  templateUrl: './apply-job.component.html',
  styleUrls: ['./apply-job.component.scss']
})
export class ApplyJobComponent implements OnInit {

  email: string;
  message: string;
  // job: Job;
  appObj: { job: string, email: string, message: string};
  constructor(public dialogRef: MatDialogRef<ApplyJobComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private applyService: ApplicationService) { }

  ngOnInit() {
    console.log(this.data);
  }
  onSubmit(formObj: NgForm) {
    this.email = formObj.value.email;
    this.message = formObj.value.message;
    // this.job = this.data;
    this.appObj = { job: this.data.data, email: this.email, message: this.message};
    console.log(this.appObj);
    this.postApplication(this.appObj);
  }
  postApplication(obj: any) {
    this.applyService.postApplication(obj).subscribe(
      (data: any) => {
        console.log(data);
      }
    );
    console.log(this.appObj);
  }

}
