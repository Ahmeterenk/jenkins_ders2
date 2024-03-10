import { ITask, NewTask } from './task.model';

export const sampleWithRequiredData: ITask = {
  id: 21903,
};

export const sampleWithPartialData: ITask = {
  id: 19898,
  title: 'how aboard as',
  description: 'blah',
};

export const sampleWithFullData: ITask = {
  id: 31237,
  title: 'impartial hence apprehensive',
  description: 'justly fooey seldom',
};

export const sampleWithNewData: NewTask = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
