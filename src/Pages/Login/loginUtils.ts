import Input from '@components/Input';
import Select from '@components/Select';

export type LoginInitValuesType = {
  email: string;
  password: string;
  remember_me: boolean;
  serverError?: string;
};

export const LoginInitValues: LoginInitValuesType = {
  email: '',
  password: '',
  remember_me: false,
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
