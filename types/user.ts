import { GenderEnum } from "./gender";

export type User = {
  email: string;
  gender: GenderEnum;
  id: number;
  name: string;
};
