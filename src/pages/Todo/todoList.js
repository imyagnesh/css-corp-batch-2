import React, { memo } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './todoItem';

const TodoList = ({ todoList, toggleComplete, deleteTodo, filterType }) => {
  console.log('TodoList render');
  return (
    <div className="flex-1 overflow-auto">
      {todoList.reduce((p, c) => {
        const UI = (
          <TodoItem
            key={c.id}
            item={c}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        );
        switch (filterType) {
          case 'pending':
            if (!c.isDone) {
              return [...p, UI];
            }
            break;

          case 'completed':
            if (c.isDone) {
              return [...p, UI];
            }
            break;

          default:
            return [...p, UI];
        }
        return p;
      }, [])}
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

export default memo(TodoList);
