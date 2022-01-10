import React from 'react';
import { Form, Formik } from 'formik';
import cn from 'classnames';
import wait from '../Login/index';
import Dropdown from '../../components/selectMenu/index';

// Name
// Email
// Gender -> Radio Button
// Country -> Select
// Password
// Confirm Password
const setSelectedCountry = (values, value) => {
  values.country = value;
}

const Register = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        gender: '',
        country: '',
        password: '',
        cpassword: ''
      }}
      onSubmit={async (values, actions) => {
        await wait(5000);

        actions.resetForm();

        console.log(values);
      }}
      validate={(values) => {
        const errors = {};
        if (!values.name) {
          errors.name = 'Required field'
        }
        if (!values.email) {
          errors.email = 'Required field';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        if (!values.gender) {
          errors.gender = 'Required'
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
        if (!values.cpassword) {
          errors.cpassword = 'Required field';
        }
        else if (values.password !== values.cpassword) {
          errors.cpassword = 'Password and confirm password must match';
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
          <div>
            <label htmlFor="full-name" className="sr-only">
              Full Name
            </label>
            <input
              id="full-name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              name="name"
              type="text"
              autoComplete="name"
              className={cn(
                'appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm',
                {
                  'border-red-300 focus:ring-red-500 focus:border-red-500 rounded-b-md':
                    touched.name && errors.name,
                },
              )}
              placeholder="Full Name"
            />
            {touched.name && errors.name && (
              <p className="text-red-500 text-sm my-1">{errors.name}</p>
            )}
          </div>
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
          <label className="block text-sm font-medium text-gray-700 float-left">
            Gender
            </label>
          <div className="flex justify-center">
            <div className="form-check form-check-inline">
              <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="gender" id="male" value="male" checked={values.gender === 'male'} onChange={handleChange} onBlur={handleBlur} />
              <label className="form-check-label inline-block text-gray-800" htmlFor="male">Male</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="gender" id="female" value="female" checked={values.gender === 'female'} onChange={handleChange} onBlur={handleBlur} />
              <label className="form-check-label inline-block text-gray-800" htmlFor="female">Female</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2" type="radio" name="gender" id="na" value="na" checked={values.gender === 'na'} onChange={handleChange} onBlur={handleBlur} />
              <label className="form-check-label inline-block text-gray-800" htmlFor="na">Rather not say</label>
            </div>
          </div>
          {touched.gender && errors.gender && (
            <p className="text-red-500 text-sm my-1 text-center">{errors.gender}</p>
          )}
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
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="cpassword"
              value={values.cpassword}
              onChange={handleChange}
              onBlur={handleBlur}
              name="cpassword"
              type="password"
              autoComplete="confirm-password"
              className={cn(
                'appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm',
                {
                  'border-red-300 focus:ring-red-500 focus:border-red-500 rounded-md':
                    touched.cpassword && errors.cpassword,
                },
              )}
              placeholder="Confirm Password"
            />
            {touched.cpassword && errors.cpassword && (
              <p className="text-red-500 text-sm my-1">{errors.cpassword}</p>
            )}
          </div>
          <Dropdown data={values} setSelectedCountry={setSelectedCountry} />
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
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Register;
