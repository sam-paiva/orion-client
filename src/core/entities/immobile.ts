import { AcquisitionType } from './acquisitionType';
import { Address } from './address';
import { ImmobileType } from './immobileType';

export interface Immobile {
  id: string;
  title: string;
  description: string;
  address: Address;
  photosUrl: string[];
  price: number;
  acquisitionType: AcquisitionType;
  immobileType: ImmobileType;
  bedrooms: number;
}
