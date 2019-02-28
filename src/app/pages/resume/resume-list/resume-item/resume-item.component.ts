import {Component, Input, OnInit} from '@angular/core';
import {Resume, ResumeCategoryDeatil} from '../../resume.model';

@Component({
  selector: 'app-resume-item',
  templateUrl: './resume-item.component.html',
  styleUrls: ['./resume-item.component.scss']
})
export class ResumeItemComponent implements OnInit {

  @Input() resumeItem: Resume;
  constructor() { }

  ngOnInit() {
  }

}
