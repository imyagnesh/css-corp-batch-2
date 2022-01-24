import React, { ComponentProps } from 'react';
import cn from 'classnames';
import { FieldProps } from 'formik';
import { IsFirstOrLastProps } from 'types/customTypes';

type SelectOption = {
  value: string;
  text: string;
};

type Props = {
  options: SelectOption[];
} & IsFirstOrLastProps &
  FieldProps &
  ComponentProps<'select'>;

const Select = ({
  field,
  form: { touched, errors },
  isFirst,
  isLast,
  options,
  ...props
}: Props) => {
  const isError = !!(touched[field.name] && errors[field.name]);
  return (
    <div>
      <label htmlFor={field.name} className="sr-only">
        {props.placeholder}
      </label>
      <select
        id={field.name}
        className={cn(
          'appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm',
          {
            'rounded-t-md': isFirst || isError,
            'rounded-b-md': isLast || isError,
            'border-red-300 focus:ring-red-500 focus:border-red-500': isError,
          },
        )}
        {...field}
        {...props}
      >
        <option value="">{props.placeholder}</option>
        {options.map((x) => (
          <option key={x.value} value={x.value}>
            {x.text}
          </option>
        ))}
      </select>
      {isError && (
        <p className="text-red-500 text-sm my-1">{errors[field.name]}</p>
      )}
    </div>
  );
};

export default Select;
