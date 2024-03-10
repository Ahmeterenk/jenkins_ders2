import { IJob, NewJob } from './job.model';

export const sampleWithRequiredData: IJob = {
  id: 18609,
};

export const sampleWithPartialData: IJob = {
  id: 7439,
  minSalary: 1500,
};

export const sampleWithFullData: IJob = {
  id: 2219,
  jobTitle: 'Internal Directives Designer',
  minSalary: 11649,
  maxSalary: 7027,
};

export const sampleWithNewData: NewJob = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
