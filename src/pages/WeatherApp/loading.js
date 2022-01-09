import React from 'react';

const Loading = () => {
  return (
    <div className='flex items-center'>
      <span className='visually-hidden spinner-border animate-spin border-red-600 inline-block w-6 h-6 border-4 rounded-full'></span>
    </div>
  );
}

export default Loading;