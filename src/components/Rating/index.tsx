import React, { memo } from 'react';
import cn from 'classnames';
import { StarIcon } from '@heroicons/react/solid';
import { RatingType } from 'types/productsTypes';

const Rating = ({ rate, count }: RatingType) => {
  return (
    <div className="flex items-center">
      <div className="flex items-center">
        {[...Array(5).keys()].map((rating) => (
          <StarIcon
            key={rating}
            className={cn('h-5 w-5 flex-shrink-0 text-gray-900', {
              'text-gray-200': rate < rating,
            })}
            aria-hidden="true"
          />
        ))}
      </div>
      <p className="sr-only">{rate} out of 5 stars</p>
      <a
        href="#"
        className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
      >
        {count} reviews
      </a>
    </div>
  );
};

export default memo(Rating);
