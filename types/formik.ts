import { FieldConfig, GenericFieldHTMLAttributes } from "formik";

type IsFirstType = {
  isFirst?: boolean;
  isLast?: never;
};

type IsLastType = {
  isFirst?: never;
  isLast?: boolean;
};

export type IsFirstOrLastProps = IsFirstType | IsLastType;

type SelectOptions = {
  value: string;
  text: string;
};

export type FieldsProps<T> = {
  options?: SelectOptions[];
} & IsFirstOrLastProps &
  FieldConfig<T> &
  GenericFieldHTMLAttributes;
