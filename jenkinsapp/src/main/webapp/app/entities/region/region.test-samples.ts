import { IRegion, NewRegion } from './region.model';

export const sampleWithRequiredData: IRegion = {
  id: 14473,
};

export const sampleWithPartialData: IRegion = {
  id: 8842,
  regionName: 'diligently paradise',
};

export const sampleWithFullData: IRegion = {
  id: 18707,
  regionName: 'cue while',
};

export const sampleWithNewData: NewRegion = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
