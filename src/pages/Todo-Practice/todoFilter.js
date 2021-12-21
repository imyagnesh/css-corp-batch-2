import React, { lazy, memo, Suspense } from 'react';
import PropTypes from 'prop-types';

const FilterButton = lazy(() => import('./filterButton'));

const TodoFilter = ({ fetchTodo, httpStatus, filterType }) => {
  console.log('TodoFilter');
  const filterTypes = ['all', 'pending', 'completed'];
  return <div className="flex mb-6">
    {filterTypes.map(filter => {
      return (
        <Suspense key={filter} fallback={<h5>{filter} Todo Filter Button is loading...</h5>}>
          <FilterButton key={filter} httpStatus={httpStatus} fetchTodo={fetchTodo} filter={filter} isActive={filterType === filter} />
        </Suspense>
      )
    })}
  </div>
}

TodoFilter.prototype = {
  fetchTodo: PropTypes.func.isRequired,
  filterType: PropTypes.string.isRequired,
  httpStatus: PropTypes.shape({
    type: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
  })
}

export default memo(TodoFilter);