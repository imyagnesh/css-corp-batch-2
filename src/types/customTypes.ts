import { FieldConfig, GenericFieldHTMLAttributes } from 'formik';
import React from 'react';

type IsFirstType = {
  isFirst?: boolean;
  isLast?: never;
};

type IsLastType = {
  isFirst?: never;
  isLast?: boolean;
};

export type SelectOptions = {
  value: string;
  text: string;
};

export type FieldsProps<T> = {
  options?: SelectOptions[];
} & IsFirstOrLastProps &
  FieldConfig<T> &
  GenericFieldHTMLAttributes;

export type IsFirstOrLastProps = IsFirstType | IsLastType;

export type ProviderType = {
  children: React.ReactElement;
};

export type LoadingType = {
  type: string;
  processId?: number;
};

export type ErrorType = {
  error: string;
  key?: string;
} & LoadingType;
