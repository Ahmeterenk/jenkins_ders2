import { IDepartment, NewDepartment } from './department.model';

export const sampleWithRequiredData: IDepartment = {
  id: 23597,
  departmentName: 'diabetes yahoo',
};

export const sampleWithPartialData: IDepartment = {
  id: 3052,
  departmentName: 'broadly costly boo',
};

export const sampleWithFullData: IDepartment = {
  id: 8035,
  departmentName: 'whether gratefully aw',
};

export const sampleWithNewData: NewDepartment = {
  departmentName: 'tensely exactly',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
