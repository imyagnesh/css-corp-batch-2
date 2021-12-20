import React, { forwardRef, memo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { TodoConsumer } from '../../context/todoContext';

const TodoForm = forwardRef((props, ref) => {
  console.log('TodoForm render');
  return (
    <TodoConsumer>
      {({ addTodo, addTodoStatus }) => (
        <>
          <form
            className="flex justify-center my-2"
            onSubmit={(event) => addTodo(event, ref.current.value)}
          >
            <input type="text" className="input" ref={ref} />
            <button
              type="submit"
              className={cn({
                'btn-primary': addTodoStatus?.status !== 'REQUEST',
                'btn-disabled': addTodoStatus?.status === 'REQUEST',
              })}
              disabled={addTodoStatus?.status === 'REQUEST'}
            >
              Add Todo
            </button>
          </form>
          {addTodoStatus?.status === 'FAIL' && (
            <p className="text-center text-red-600">
              {addTodoStatus?.payload.message}
            </p>
          )}
        </>
      )}
    </TodoConsumer>
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
