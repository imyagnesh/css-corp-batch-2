import React, { memo, useEffect, useState } from 'react';

const Child1 = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const mouseMove = () => {
      console.log('mouse Moved...');
    };

    document.addEventListener('mousemove', mouseMove);

    // component Will Unmount
    return () => {
      document.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  const incrementCounter = () => {
    setCounter((val) => val + 1);
  };

  if (counter > 5) {
    throw new Error('Counter should not greater than 5');
  }

  return (
    <div>
      <h1>Child 1 Component</h1>
      <h2>{counter}</h2>
      <button type="button" onClick={incrementCounter}>
        Increment Counter
      </button>
    </div>
  );
};

export default memo(
  Child1,
  (prevProps, nextProps) => prevProps.counter > nextProps.counter,
);
