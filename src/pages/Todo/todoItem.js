import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { TodoConsumer } from '../../context/todoContext';

const TodoItem = ({ item }) => {
  console.log('TodoItem render');
  return (
    <div className="flex items-center m-2" key={item.id}>
      <TodoConsumer>
        {({ toggleComplete, updateTodoStatus }) => (
          <input
            type="checkbox"
            checked={item.isDone}
            disabled={!!updateTodoStatus('REQUEST', item.id)}
            onChange={() => toggleComplete(item)}
          />
        )}
      </TodoConsumer>
      <p
        className={cn('flex-1 px-2', {
          'line-through': item.isDone,
        })}
      >
        {item.text}
      </p>
      <p>{item.timeStamp}</p>
      <TodoConsumer>
        {({ deleteTodo, deleteTodoStatus }) => (
          <button
            type="button"
            // className={cn('btn-primary', {
            //   'btn-disabled': deleteTodoStatus('REQUEST', item.id),
            // })}
            disabled={() => !!deleteTodoStatus('REQUEST', item.id)}
            onClick={() => deleteTodo(item)}
          >
            Delete
          </button>
        )}
      </TodoConsumer>
    </div>
  );
};

TodoItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    isDone: PropTypes.bool,
    timeStamp: PropTypes.string,
  }).isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  httpStatus: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      payload: PropTypes.objectOf(Error),
      status: PropTypes.oneOf(['REQUEST', 'FAIL']),
    }),
  ).isRequired,
};

TodoItem.displayName = 'TodoItem';

export default memo(TodoItem);
