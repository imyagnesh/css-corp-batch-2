import Input from "@components/Input";
import Select from "@components/Select";
import { GenderEnum } from "@types/gender";

export type RegisterInitValueType = {
  email: string;
  gender?: GenderEnum;
  password: string;
  confirmPassword: string;
  serverError?: string;
};

export const RegisterInitValues: RegisterInitValueType = {
  email: "",
  password: "",
  confirmPassword: "",
};

export const RegisterFields = [
  {
    name: "name",
    component: Input,
    autoComplete: "name",
    placeholder: "Name",
    validate: (value: string) => {
      if (!value) {
        return "required...";
      }
    },
    isFirst: true,
  },
  {
    name: "gender",
    component: Select,
    placeholder: "Please select gender",
    options: [
      {
        value: GenderEnum.male,
        text: "Male",
      },
      {
        value: GenderEnum.female,
        text: "Female",
      },
      {
        value: GenderEnum.other,
        text: "Other",
      },
    ],
    validate: (value: string) => {
      if (!value) {
        return "required...";
      }
    },
  },
  {
    name: "email",
    component: Input,
    type: "email",
    autoComplete: "email",
    placeholder: "Email address",
    validate: (value: string) => {
      if (!value) {
        return "required...";
      }
    },
  },
  {
    name: "password",
    component: Input,
    type: "password",
    autoComplete: "new-password",
    placeholder: "Password",
    validate: (value: string) => {
      if (!value) {
        return "required...";
      }
    },
  },
  {
    name: "confirmPassword",
    component: Input,
    type: "password",
    autoComplete: "new-password",
    placeholder: "Confirm Password",
    validate: (value: string) => {
      if (!value) {
        return "required...";
      }
    },
    isLast: true,
  },
];
