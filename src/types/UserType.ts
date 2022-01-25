import { GenderEnum } from './commonTypes';

export type User = {
  email: string;
  gender: GenderEnum;
  id: number;
  name: string;
};
