import { ICountry, NewCountry } from './country.model';

export const sampleWithRequiredData: ICountry = {
  id: 19963,
};

export const sampleWithPartialData: ICountry = {
  id: 21527,
  countryName: 'credit',
};

export const sampleWithFullData: ICountry = {
  id: 17997,
  countryName: 'linguistics',
};

export const sampleWithNewData: NewCountry = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
