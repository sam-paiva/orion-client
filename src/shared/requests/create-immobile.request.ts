import { AcquisitionType } from '../../core/entities/acquisitionType';
import { ImmobileType } from '../../core/entities/immobileType';

export interface CreateImmobileRequest {
  title: string;
  description: string;
  bedrooms: number;
  address: {};
  photosUrl: string[];
  price: number;
  acquisitionType: AcquisitionType;
  immobileType: ImmobileType;
  whatsappContact: string;
}
