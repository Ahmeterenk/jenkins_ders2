import dayjs from 'dayjs/esm';

import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 9573,
};

export const sampleWithPartialData: IEmployee = {
  id: 31807,
  lastName: 'Veum',
  email: 'Anita.Ankunding72@hotmail.com',
  hireDate: dayjs('2024-03-10T05:19'),
};

export const sampleWithFullData: IEmployee = {
  id: 7064,
  firstName: 'Karson',
  lastName: 'Nolan',
  email: 'Larue_Gottlieb75@hotmail.com',
  phoneNumber: 'who psst mortally',
  hireDate: dayjs('2024-03-10T03:59'),
  salary: 339,
  commissionPct: 14389,
};

export const sampleWithNewData: NewEmployee = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
