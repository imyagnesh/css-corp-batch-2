import React, { ComponentProps } from 'react';
import { FieldProps } from 'formik';

type LabelProps = {
  children: string;
};

export type CheckboxProps = LabelProps &
  FieldProps &
  Omit<ComponentProps<'label'>, keyof LabelProps>;

const Checkbox = ({ field, children }: CheckboxProps) => {
  return (
    <div className="flex items-center">
      <input
        id={field.name}
        type="checkbox"
        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
        {...field}
      />
      <label htmlFor={field.name} className="ml-2 block text-sm text-gray-900">
        {children}
      </label>
    </div>
  );
};

export default Checkbox;
