import {Photo} from '../companies/company.model';
import {Qualification} from '../jobs/job.model';

export interface Resume {
  fullName: string;
  mail: string;
  resumeId: number;
  professionalTitle: string;
  location: string;
  video: string;
  resumeCategoryDetails: ResumeCategoryDeatil[];
  skill: string;
  resumeContent: string;
  candidateId: number;
  // urls: Url[];
  educations: Education[];
  experiences: Experience[];
  photoId: number;
  photo: Photo;
}

export interface Url {
  name: string;
  url: string;
}

export interface Education {
  schoolName: string;
  qualificationId: number;
  qualification: string;
  date: Date;
  notes: string;
}

export interface Experience {
  employer: string;
  jobTitle: string;
  date: string;
  notes: string;
}

export interface ResumeCategoryDeatil {
  resumeId: number;
  resumeCategoryIds: string;
  resumeCategory: ResumeCategory;
}

export interface ResumeCategory {
  resumeCategoryId: number;
  title: string;
}
