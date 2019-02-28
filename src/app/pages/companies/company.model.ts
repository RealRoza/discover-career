import {Job} from '../jobs/job.model';

export interface Company {
  companyId: number;
  companyName: string;
  companySlug: string;
  photoId: number;
  photo: Photo;
  companyLocation: string;
  tagLine: string;
  foundtionYear: string;
  companySize: string;
  companyMail: string;
  companyDescription: string;
  video: string;
  facebookUserName: string;
  phoneNumber: string;
  website: string;
  linkedInUserName: string;
  twitterUserName: string;
  industryId: string;
  industry: Industry;
  jobs?: Job[];
  jobSize: number;

}

export interface Industry {
  industryId: number;
  title: string;
}
export interface Photo {
  photoId: number;
  url: string;
  publicId: string;
}
