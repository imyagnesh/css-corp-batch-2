import React, { memo } from 'react';
import { ProductType } from 'types/productsTypes';
import cn from 'classnames';
import Rating from '@components/Rating';
import { CartType } from 'types/cartTypes';

type Props = {
  handleCart: (productId: number) => void;
  cartItem: CartType | undefined;
} & ProductType;

const Product = ({
  title,
  price,
  rating,
  description,
  category,
  image,
  id,
  cartItem,
  handleCart,
}: Props) => {
  console.log('Product Component');

  return (
    <div className="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
      <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
        <div className="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5">
          <img src={image} alt={title} className="object-center object-cover" />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">
            {title}
          </h2>

          <section aria-labelledby="information-heading" className="mt-2">
            <h3 id="information-heading">{description}</h3>

            <p className="text-2xl text-gray-900">
              {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(price)}
            </p>

            {/* Reviews */}
            <div className="mt-6">
              <h4>Reviews</h4>
              <Rating {...rating} />
            </div>
          </section>

          <section aria-labelledby="options-heading" className="mt-10">
            <h3 id="options-heading">{category}</h3>

            <button
              type="button"
              className={cn(
                'mt-6 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
                {
                  'bg-gray-600': !!cartItem,
                },
              )}
              onClick={() => handleCart(id)}
            >
              Add to bag
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default memo(Product);
