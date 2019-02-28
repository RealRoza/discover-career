import {Company} from '../companies/company.model';

export interface Job {
  jobId: number;
  jobTitle: string;
  location: string;
  jobTag: string;
  description: string;
  mail: string;
  closingDate: Date;
  startDate: Date;
  salary: number;
  experience: string;
  excerpt: string;
  employerId: string;
  employer: Employer;
  jobTypeId: number;
  jobType: JobType;
  careerLevelId: number;
  careerLevel: CareerLevel;
  qualificationId: number;
  qualification: Qualification;
  jobTagId: number;
  companyId: number;
  company: Company;
  jobCategoryDetails: JobCategoryDetails[];
}

export interface Employer {
  employerId: number;
  firstName: string;
  lastName: string;
  userId: number;
}

export interface JobType {
  jobTypeId: number;
  title: string;
}

export interface CareerLevel {
  careerLevelId: number;
  title: string;
}

export interface Qualification {
  qualificationId: number;
  title: string;
}

export interface JobCategoryDetails {
  jobId: string;
  jobCategoryId: number;
  jobCategory: JobCategory;

}

export interface JobCategory {
  jobCategoryId: number;
  title: string;
}
