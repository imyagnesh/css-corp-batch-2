import React from 'react';
import cn from 'classnames';
import { Form, Formik } from 'formik';

// Name
// Email
// Gender -> Radio Button
// Country -> Select
// Password
// Confirm Password

const Register = () => (
  <Formik
    initialValues={{
      firstname: '',
      lastname: '',
      email: '',
      gender: false,
      country: 'India',
      password: '',
      confirmpassword: '',
    }}
    onSubmit={(values, actions) => {
      actions.resetForm();

      console.log(values);
      alert(values);
    }}
    validate={(values) => {
      const errors = {};
      if (!values.firstname) {
        errors.firstname = 'Please enter your First Name...';
      }

      if (!values.lastname) {
        errors.lastname = 'Please enter your Last Name...';
      }

      if (!values.email) {
        errors.email = 'Please enter Email Address...';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
      }

      if (!values.password) {
        errors.password = 'Please enter Password...';
      } else if (
        !/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/i.test(
          values.password,
        )
      ) {
        errors.password =
          'Password must contain at least 8 characters, one uppercase, one number and one special case character';
      }

      if (!values.confirmpassword) {
        errors.confirmpassword = 'Please enter confirm password...';
      } else if (values.password !== values.confirmpassword) {
        errors.confirmpassword = 'Password did not match: Please try again...';
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
      onSubmit,
    }) => (
      <form className="mt-8 space-y-6" onSubmit={onSubmit}>
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="firstname"
                  className="block text-sm font-medium text-gray-700"
                >
                  First name
                </label>
                <input
                  type="text"
                  value={values.firstname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="firstname"
                  id="firstname"
                  autoComplete="given-name"
                  placeholder="First Name"
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
                {touched.firstname && errors.firstname && (
                  <p className="text-red-500 text-sm my-1">
                    {errors.firstname}
                  </p>
                )}
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="lastname"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last name
                </label>
                <input
                  type="text"
                  value={values.lastname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="lastname"
                  id="lastname"
                  placeholder="Last Name"
                  autoComplete="family-name"
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
                {touched.lastname && errors.lastname && (
                  <p className="text-red-500 text-sm my-1">{errors.lastname}</p>
                )}
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
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
                    'appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm',
                    {
                      'border-red-300 focus:ring-red-500 focus:border-red-500 rounded-md':
                        touched.email && errors.email,
                    },
                  )}
                  placeholder="Email address"
                />
                {touched.email && errors.email && (
                  <p className="text-red-500 text-sm my-1">{errors.email}</p>
                )}
              </div>

              <fieldset className="col-span-6 sm:col-span-4">
                <div className="space-y-4">
                  <label
                    htmlFor="female"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Gender
                  </label>
                  <div className="flex items-center">
                    <input
                      id="female"
                      name="gender"
                      value={values.gender}
                      onChange={handleChange}
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                    <label
                      htmlFor="push-everything"
                      className="ml-3 block text-sm font-medium text-gray-700"
                    >
                      Female
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="male"
                      value={values.gender}
                      onChange={handleChange}
                      name="gender"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                    <label
                      htmlFor="male"
                      className="ml-3 block text-sm font-medium text-gray-700"
                    >
                      Male
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="transgender"
                      value={values.gender}
                      onChange={handleChange}
                      name="gender"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                    <label
                      htmlFor="transgender"
                      className="ml-3 block text-sm font-medium text-gray-700"
                    >
                      Transgender
                    </label>
                  </div>
                </div>
              </fieldset>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700"
                >
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  value={values.country}
                  onChange={handleChange}
                  autoComplete="country-name"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option>India</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                </select>
              </div>
              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
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
                    'appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm',
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
              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="confirmpassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <input
                  id="confirmpassword"
                  name="confirmpassword"
                  value={values.confirmpassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="password"
                  autoComplete="current-password"
                  className={cn(
                    'appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm',
                    {
                      'border-red-300 focus:ring-red-500 focus:border-red-500 rounded-md':
                        touched.confirmpassword && errors.confirmpassword,
                    },
                  )}
                  placeholder="Confirm Password"
                />
                {touched.confirmpassword && errors.confirmpassword && (
                  <p className="text-red-500 text-sm my-1">
                    {errors.confirmpassword}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              disabled={onSubmit || !(dirty && isValid)}
              className={cn(
                'inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
                {
                  'bg-gray-300 hover:bg-gray-600 focus:ring-gray-500':
                   onSubmit || !(dirty && isValid),
                },
              )}
            >
              Save
            </button>
            {onSubmit && <span>Successfully submitted</span>}
          </div>
        </div>
      </form>
    )}
  </Formik>
);

export default Register;
