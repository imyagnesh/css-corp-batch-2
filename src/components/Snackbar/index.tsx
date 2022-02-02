import React, { useEffect, useMemo } from 'react';

type Props = {
  index: number;
  text: string;
  btnText: string;
  title: string;
  onCancel: () => void;
};

const Snackbar = ({ index, title, text, btnText, onCancel }: Props) => {
  useEffect(() => {
    const timer = setTimeout(onCancel, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const bottom = useMemo(() => `${index * 48}px`, [index]);

  return (
    <div
      className="fixed left-0 w-full sm:w-1/2"
      style={{
        bottom,
      }}
    >
      <div className="flex justify-between items-center m-2 bg-neutral-600 max-h-12 py-2 pl-4 pr-2 rounded">
        <div className="flex items-center">
          <h2 className="text-lg font-semibold text-white mr-1">{title}: </h2>
          <p className="text-base text-white truncate">{text}</p>
        </div>
        <button
          type="button"
          onClick={onCancel}
          className="text-sm font-medium text-indigo-600 hover:text-indigo-500 disabled:text-gray-600"
        >
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default Snackbar;
