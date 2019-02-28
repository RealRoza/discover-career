import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {MatButtonModule, MatNativeDateModule} from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RecentListingComponent } from './recent-listing/recent-listing.component';
import { FooterComponent } from './footer/footer.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import { JobsComponent } from './jobs/jobs.component';
import { JobsListComponent } from './jobs/jobs-list/jobs-list.component';
import { JobItemComponent } from './jobs/jobs-list/job-item/job-item.component';
import { JobsDetailComponent } from './jobs/jobs-detail/jobs-detail.component';
import {MatCardModule} from '@angular/material/card';
import { CompaniesComponent } from './companies/companies.component';
import { CompaniesListComponent } from './companies/companies-list/companies-list.component';
import { CompaniesDetailComponent } from './companies/companies-detail/companies-detail.component';
import { CompanyItemComponent } from './companies/companies-list/company-item/company-item.component';
import {MatSelectModule} from '@angular/material/select';
import { PostJobComponent } from './post-job/post-job.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {EditorModule} from 'primeng/components/editor/editor';
import {SharedModule} from "primeng/components/common/shared";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {AppRoutingModule} from '../app-routing.module';
import {MatDialogModule} from '@angular/material/dialog';
// import { MatMomentDateModule, MomentDateAdapter } from "@angular/material-moment-adapter";
import {FileUploadModule} from 'primeng/fileupload';
import {MessageService} from 'primeng/api';
import { ResumeComponent } from './resume/resume.component';
import { ResumeListComponent } from './resume/resume-list/resume-list.component';
import { ResumeDetailComponent } from './resume/resume-detail/resume-detail.component';
import { ResumeItemComponent } from './resume/resume-list/resume-item/resume-item.component';
import { ApplyJobComponent } from './apply-job/apply-job.component';

@NgModule({
  declarations: [
    HomeComponent,
    RecentListingComponent,
    FooterComponent,
    JobsComponent,
    JobsListComponent,
    JobItemComponent,
    JobsDetailComponent,
    CompaniesComponent,
    CompaniesListComponent,
    CompaniesDetailComponent,
    CompanyItemComponent,
    PostJobComponent,
    ResumeComponent,
    ResumeListComponent,
    ResumeDetailComponent,
    ResumeItemComponent,
    ApplyJobComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatDividerModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    MatCheckboxModule,
    EditorModule,
    SharedModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    FileUploadModule,
    MatDialogModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatDividerModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    MatCheckboxModule,
    EditorModule,
    SharedModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    FileUploadModule,
    MatDialogModule
  ],
  entryComponents: [
    ApplyJobComponent,
  ],
  providers: [
    MessageService
  ],
})
export class MaterialModule {
}
