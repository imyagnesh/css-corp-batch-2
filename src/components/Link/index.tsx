import React, { ComponentProps } from 'react';

const Link = (props: ComponentProps<'a'>) => {
  return (
    <div className="text-sm">
      <a
        className="font-medium text-indigo-600 hover:text-indigo-500"
        {...props}
      />
    </div>
  );
};

export default Link;
