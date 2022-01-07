import React from 'react';
import cn from 'classnames';
import { Form, Formik } from 'formik';
import { LockClosedIcon } from '@heroicons/react/solid';

const wait = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

const Login = () => (
  <Formik
    initialValues={{
      email: '',
      password: '',
      rememberMe: false,
    }}
    onSubmit={async (values, actions) => {
      await wait(5000);

      actions.resetForm();

      console.log(values);
    }}
    validate={(values) => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Required...';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
      }

      if (!values.password) {
        errors.password = 'Required...';
      } else if (
        !/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/i.test(
          values.password,
        )
      ) {
        errors.password =
          'Password must contain at least 8 characters, one uppercase, one number and one special case character';
      }
      return errors;
    }}
  >
    {({
      values,
      handleChange,
      handleBlur,
      errors,
      touched,
      isValid,
      dirty,
      isSubmitting,
    }) => (
      <Form className="mt-8 space-y-6">
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              name="email"
              type="email"
              autoComplete="email"
              className={cn(
                'appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm',
                {
                  'border-red-300 focus:ring-red-500 focus:border-red-500 rounded-b-md':
                    touched.email && errors.email,
                },
              )}
              placeholder="Email address"
            />
            {touched.email && errors.email && (
              <p className="text-red-500 text-sm my-1">{errors.email}</p>
            )}
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              name="password"
              type="password"
              autoComplete="current-password"
              className={cn(
                'appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm',
                {
                  'border-red-300 focus:ring-red-500 focus:border-red-500 rounded-md':
                    touched.password && errors.password,
                },
              )}
              placeholder="Password"
            />
            {touched.password && errors.password && (
              <p className="text-red-500 text-sm my-1">{errors.password}</p>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="rememberMe"
              type="checkbox"
              checked={values.rememberMe}
              onChange={handleChange}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-gray-900"
            >
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting || !(dirty && isValid)}
            className={cn(
              'group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
              {
                'bg-gray-300 hover:bg-gray-600 focus:ring-gray-500':
                  isSubmitting || !(dirty && isValid),
              },
            )}
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon
                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                aria-hidden="true"
              />
            </span>
            Sign in
          </button>
        </div>
      </Form>
    )}
  </Formik>
);

export default Login;
