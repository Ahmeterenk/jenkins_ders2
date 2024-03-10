import { ILocation, NewLocation } from './location.model';

export const sampleWithRequiredData: ILocation = {
  id: 12421,
};

export const sampleWithPartialData: ILocation = {
  id: 1489,
};

export const sampleWithFullData: ILocation = {
  id: 2213,
  streetAddress: 'apud',
  postalCode: 'gadzooks enormous mmm',
  city: 'Port Ayanafort',
  stateProvince: 'shrilly',
};

export const sampleWithNewData: NewLocation = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
