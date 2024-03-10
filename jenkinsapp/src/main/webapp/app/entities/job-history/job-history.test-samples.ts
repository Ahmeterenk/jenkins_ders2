import dayjs from 'dayjs/esm';

import { IJobHistory, NewJobHistory } from './job-history.model';

export const sampleWithRequiredData: IJobHistory = {
  id: 8601,
};

export const sampleWithPartialData: IJobHistory = {
  id: 13015,
  startDate: dayjs('2024-03-10T04:30'),
  endDate: dayjs('2024-03-09T23:32'),
};

export const sampleWithFullData: IJobHistory = {
  id: 25499,
  startDate: dayjs('2024-03-10T08:47'),
  endDate: dayjs('2024-03-10T04:11'),
  language: 'SPANISH',
};

export const sampleWithNewData: NewJobHistory = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
