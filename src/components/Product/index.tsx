import React, { ChangeEvent, memo } from 'react';
import { ProductType } from 'types/productsTypes';
import cn from 'classnames';
import Rating from '@components/Rating';
import { CartType } from 'types/cartTypes';

type Props = {
  handleCart: (productId: number) => void;
  updateCart: (cartItem: CartType) => void;
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
  updateCart,
}: Props) => {
  console.log('Product Component');

  const changeQuantity = (event: ChangeEvent<HTMLSelectElement>) => {
    if (cartItem) {
      updateCart({ ...cartItem, quantity: Number(event.target.value) });
    }
  };

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

            {!cartItem ? (
              <button
                type="button"
                className={cn(
                  {
                    'bg-gray-600 hover:bg-none focus:ring-0': !!cartItem,
                    'hover:bg-indigo-700 focus:ring-indigo-500': !cartItem,
                  },
                  'mt-6 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 ',
                )}
                onClick={() => handleCart(id)}
              >
                Add to bag
              </button>
            ) : (
              <select
                value={cartItem.quantity}
                onChange={changeQuantity}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                {[...Array(10).keys()].map((x) => (
                  <option key={x} value={x}>
                    {x}
                  </option>
                ))}
              </select>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default memo(Product);
