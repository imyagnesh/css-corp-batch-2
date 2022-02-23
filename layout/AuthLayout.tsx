import Image, { ImageLoaderProps } from "next/image";
import Logo from "@public/icons/logo.svg";
import { useAuth } from "../context/authContext";

const myLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `https://res.cloudinary.com/dnxzgxivo/image/upload/w_${width}/f_auto,q_${quality}/${src}`;
};

const AuthLayout: React.FC = ({ children }) => {
  const { isLoggedIn } = useAuth();
  console.log(isLoggedIn);

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="flex flex-col items-center">
          <Logo height="32" width={32} />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Or{" "}
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              start your 14-day free trial
            </a>
          </p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
