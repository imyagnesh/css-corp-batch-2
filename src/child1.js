import React, { memo } from 'react';

const Child1 = () => {
    console.log('Child 1 component');
    return (
        <div>
            <h1>Child 1 Component</h1>
        </div>
    );
};

export default memo(
    Child1,
    (prevProps, nextProps) => prevProps.counter > nextProps.counter,
);