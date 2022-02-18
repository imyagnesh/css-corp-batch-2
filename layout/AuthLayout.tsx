import Image, { ImageLoaderProps } from "next/image";
import Logo from "@public/icons/logo.svg";

const myLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `https://res.cloudinary.com/dnxzgxivo/image/upload/w_${width}/f_auto,q_${quality}/${src}`;
};

const AuthLayout: React.FC = ({ children }) => {
  return (
    <div className="min-h-full">
      <div className="w-full">
        <div>
          <Image
            placeholder="blur"
            blurDataURL="https://res.cloudinary.com/dnxzgxivo/image/upload/w_300/f_auto,q_1,e_blur:1000/v1594972531/IMG_3191_removebg_761a268743.png"
            loader={myLoader}
            src="v1594972531/IMG_3191_removebg_761a268743.png"
            alt="Workflow"
            height={400}
            width={300}
            quality={75}
          />
          <Logo height="32" width={32} fill="green" />
          {/* <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          /> */}
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
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
