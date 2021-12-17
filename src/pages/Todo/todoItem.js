import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const TodoItem = ({ item, toggleComplete, deleteTodo, httpStatus }) => {
  console.log('TodoItem render');
  return (
    <div className="flex items-center m-2" key={item.id}>
      <input
        type="checkbox"
        checked={item.isDone}
        disabled={httpStatus?.status === 'REQUEST'}
        onChange={() => toggleComplete(item)}
      />
      <p
        className={cn('flex-1 px-2', {
          'line-through': item.isDone,
        })}
      >
        {item.text}
      </p>
      <p>{item.timeStamp}</p>
      <button
        type="button"
        className="btn-primary"
        onClick={() => deleteTodo(item)}
      >
        Delete
      </button>
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
  httpStatus: PropTypes.shape({
    type: PropTypes.string,
    payload: PropTypes.objectOf(Error),
    status: PropTypes.oneOf(['REQUEST', 'FAIL']),
  }),
};

TodoItem.defaultProps = {
  httpStatus: undefined,
};

TodoItem.displayName = 'TodoItem';

export default memo(TodoItem);
