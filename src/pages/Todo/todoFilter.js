import React, { memo } from 'react';
import PropTypes from 'prop-types';

const TodoFilter = ({ filterTodo }) => {
  console.log('TodoFilter render');
  return (
    <div className="flex">
      <button
        type="button"
        className="flex-1"
        onClick={() => filterTodo('all')}
      >
        All
      </button>
      <button
        type="button"
        className="flex-1"
        onClick={() => filterTodo('pending')}
      >
        Pending
      </button>
      <button
        type="button"
        className="flex-1"
        onClick={() => filterTodo('completed')}
      >
        Completed
      </button>
    </div>
  );
};

TodoFilter.propTypes = {
  filterTodo: PropTypes.func.isRequired,
};

export default memo(TodoFilter);
