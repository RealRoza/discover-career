import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-submit-resume',
  templateUrl: './submit-resume.component.html',
  styleUrls: ['./submit-resume.component.scss']
})
export class SubmitResumeComponent implements OnInit {

  categorys: any[] = [
    {id: 1, value: 'Designer'},
    {id: 2, value: 'Engineering'},
    {id: 3, value: 'Fashion'},
    {id: 4, value: 'Legality'},

  ];
  urlsForm = new FormArray([]);
  educationForm = new FormArray([]);
  experienceForm = new FormArray([]);

  constructor() {
  }

  addNewUrl() {
    this.urlsForm.push(
      new FormGroup({
        'name': new FormControl(),
        'url': new FormControl(),
      })
    );
  }

  addNewEducation() {
    this.educationForm.push(
      new FormGroup({
        'schoolName': new FormControl(),
        'qualification': new FormControl(),
        'date': new FormControl(),
        'notes': new FormControl(),
      })
    );
  }

  addNewExperience() {
    this.experienceForm.push(
      new FormGroup({
        'employer': new FormControl(),
        'jobTitle': new FormControl(),
        'date': new FormControl(),
        'notes': new FormControl(),
      })
    );
  }

  removeUrl(index: number) {
    this.urlsForm.removeAt(index);
  }

  removeEducation(index: number) {
    this.educationForm.removeAt(index);
  }

  ngOnInit() {

  }

}
