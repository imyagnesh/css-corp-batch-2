import Input from '@components/Input';
import Select from '@components/Select';

export type LoginInitValuesType = {
  email: string;
  password: string;
};

export const LoginInitValues: LoginInitValuesType = {
  email: '',
  password: '',
};

export const LoginFields = [
  {
    name: 'email',
    component: Input,
    type: 'email',
    autoComplete: 'email',
    placeholder: 'Email address',
    validate: (value: string) => {
      if (!value) {
        return 'required...';
      }
    },
    isFirst: true,
  },
  {
    name: 'name',
    component: Select,
    placeholder: 'Name',
    validate: (value: string) => {
      if (!value) {
        return 'required...';
      }
    },
    options: [
      { value: 'male', text: 'Male' },
      { value: 'female', text: 'Female' },
    ],
  },
  {
    name: 'password',
    component: Input,
    type: 'password',
    autoComplete: 'current-password',
    placeholder: 'Password',
    validate: (value: string) => {
      if (!value) {
        return 'required...';
      }
    },
    isLast: true,
  },
];
