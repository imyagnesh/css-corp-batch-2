import React, { memo } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './todoItem';

const TodoList = ({ todoList, toggleComplete, deleteTodo, httpStatus }) => {
  console.log('TodoList render');
  return (
    <div className="flex-1 overflow-auto">
      {todoList.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          httpStatus={httpStatus.filter((x) => x.id === item.id)}
        />
      ))}
    </div>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      isDone: PropTypes.bool,
    }),
  ).isRequired,
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

TodoList.displayName = 'TodoList';

export default memo(TodoList);
