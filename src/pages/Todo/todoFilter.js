import React, { memo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const TodoFilter = ({ filterTodo, filterType }) => {
  console.log('TodoFilter render');
  return (
    <div className="flex">
      <button
        type="button"
        className={cn('flex-1', {
          'text-red-400': filterType === 'all',
        })}
        onClick={() => filterTodo('all')}
      >
        All
      </button>
      <button
        type="button"
        className={cn('flex-1', {
          'text-red-400': filterType === 'pending',
        })}
        onClick={() => filterTodo('pending')}
      >
        Pending
      </button>
      <button
        type="button"
        className={cn('flex-1', {
          'text-red-400': filterType === 'completed',
        })}
        onClick={() => filterTodo('completed')}
      >
        Completed
      </button>
    </div>
  );
};

TodoFilter.displayName = 'TodoFilter';

TodoFilter.propTypes = {
  filterTodo: PropTypes.func.isRequired,
};

export default memo(TodoFilter);
