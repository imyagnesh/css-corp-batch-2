import React, { forwardRef, memo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const TodoForm = forwardRef(({ addTodo, httpStatus }, ref) => {
  console.log('TodoForm render');
  return (
    <>
      <form className="flex justify-center my-2" onSubmit={addTodo}>
        <input type="text" className="input" ref={ref} />
        <button
          type="submit"
          className={cn({
            'btn-primary': httpStatus?.status !== 'REQUEST',
            'btn-disabled': httpStatus?.status === 'REQUEST',
          })}
          disabled={httpStatus?.status === 'REQUEST'}
        >
          Add Todo
        </button>
      </form>
      {httpStatus?.status === 'FAIL' && (
        <p className="text-center text-red-600">
          {httpStatus?.payload.message}
        </p>
      )}
    </>
  );
});

TodoForm.displayName = 'TodoForm';

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  httpStatus: PropTypes.shape({
    type: PropTypes.string,
    payload: PropTypes.objectOf(Error),
    status: PropTypes.oneOf(['REQUEST', 'FAIL']),
  }),
};

TodoForm.defaultProps = {
  httpStatus: undefined,
};

export default memo(TodoForm);
