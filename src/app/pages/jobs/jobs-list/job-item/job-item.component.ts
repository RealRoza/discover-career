import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Job} from '../../job.model';

@Component({
  selector: 'app-job-item',
  templateUrl: './job-item.component.html',
  styleUrls: ['./job-item.component.scss']
})
export class JobItemComponent implements OnInit {

  @Input() jobItem: Job;
  constructor() { }

  ngOnInit() {
    console.log('url', this.jobItem.company.photo.url);
  }
}
