import * as React from 'react';
import Button from '@components/Button';
import { Field, Form, Formik, FormikConfig } from 'formik';
import { FieldsProps } from 'types/customTypes';

type Props<T> = {
  children?: React.ReactElement;
  btnText: string;
  fields: FieldsProps<T>[];
} & FormikConfig<T>;

// initialValues={LoginInitValues} onSubmit={onSubmit}
const FormikForm = <T extends { serverError?: '' }>({
  fields,
  children,
  btnText,
  ...props
}: Props<T>) => {
  return (
    <Formik {...props}>
      {({ isValid, dirty, errors, isSubmitting }) => (
        <Form className="mt-8 space-y-6">
          {errors.serverError && (
            <p className="text-center text-red-500 text-lg">
              {errors.serverError}
            </p>
          )}
          <div className="rounded-md shadow-sm -space-y-px">
            {fields.map((x) => (
              <Field key={x.name} {...x} />
            ))}
          </div>
          {children}
          <Button disabled={isSubmitting || !(dirty && isValid)} type="submit">
            {btnText}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default React.memo(FormikForm);
