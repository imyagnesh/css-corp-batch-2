import React, { lazy, memo, Suspense } from 'react';
import PropTypes from 'prop-types';

const FilterButton = lazy(() => import('./filterButton'));

const TodoFilter = () => {
  console.log('TodoFilter');
  const filterTypes = ['all', 'pending', 'completed'];
  return <div className="flex mb-6">
    {filterTypes.map(filter => {
      return (
        <Suspense key={filter} fallback={<h5>{filter} Todo Filter Button is loading...</h5>}>
          <FilterButton key={filter} filter={filter} />
        </Suspense>
      )
    })}
  </div>
}

export default memo(TodoFilter);