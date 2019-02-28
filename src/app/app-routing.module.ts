import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import {JobItemComponent} from './pages/jobs/jobs-list/job-item/job-item.component';
import {JobsDetailComponent} from './pages/jobs/jobs-detail/jobs-detail.component';
import {CompanyItemComponent} from './pages/companies/companies-list/company-item/company-item.component';
import {SubmitResumeComponent} from './pages/submit-resume/submit-resume.component';
import {PostJobComponent} from './pages/post-job/post-job.component';
import {JobsListComponent} from './pages/jobs/jobs-list/jobs-list.component';
import {JobsComponent} from './pages/jobs/jobs.component';
import {CompaniesDetailComponent} from './pages/companies/companies-detail/companies-detail.component';
import {CompaniesListComponent} from './pages/companies/companies-list/companies-list.component';
import {CompaniesComponent} from './pages/companies/companies.component';
import {ResumeItemComponent} from './pages/resume/resume-list/resume-item/resume-item.component';
import {ResumeListComponent} from './pages/resume/resume-list/resume-list.component';
import {ResumeComponent} from './pages/resume/resume.component';
import {ResumeDetailComponent} from './pages/resume/resume-detail/resume-detail.component';

const routes: Routes = [
  { path: '' , redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'jobs', component: JobsComponent, children: [
      { path: '', component: JobsListComponent},
      { path: ':id', component: JobsDetailComponent},
    ]},
  {path: 'companies', component: CompaniesComponent, children: [
      { path: '', component: CompaniesListComponent},
      { path: ':id', component: CompaniesDetailComponent},
    ]},
  { path: 'resumes', component: ResumeComponent, children: [
      { path: '', component: ResumeListComponent},
      { path: ':id', component: ResumeDetailComponent},
    ]},
  { path: 'submit-resume', component: SubmitResumeComponent},
  { path: 'post-job', component: PostJobComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
