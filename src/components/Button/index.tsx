import React, { ComponentProps, VFC, SVGProps } from 'react';

type Props = {} & ComponentProps<'button'>;

const Button = ({ children, icon: Icon, ...props }: Props) => {
  return (
    <button
      {...props}
      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      {Icon && (
        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
          <Icon />
        </span>
      )}
      {children}
    </button>
  );
};

export default Button;
