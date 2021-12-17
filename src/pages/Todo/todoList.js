import React, { memo } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './todoItem';

const TodoList = ({ todoList, toggleComplete, deleteTodo, filterType }) => {
  console.log('TodoList render');
  return (
    <div className="flex-1 overflow-auto">
      {todoList.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
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
  filterType: PropTypes.oneOf(['all', 'pending', 'completed']).isRequired,
};

TodoList.displayName = 'TodoList';

export default memo(TodoList);
