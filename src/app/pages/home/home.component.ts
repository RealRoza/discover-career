import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onSubmit(formObj: NgForm) {
    let keywords: string;
    keywords = formObj.value.keywords;
    let location: string;
    location = formObj.value.location;
    this.router.navigate(['/jobs'],
      { queryParams: { key: keywords, location: location } });
  }

}
