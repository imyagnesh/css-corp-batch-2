import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../Home';

const loadProductsFn = jest.fn();
const loadCartFn = jest.fn();

const products = [
  {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
];

const setup = ({ ...props }) => {
  render(
    <Home
      products={[]}
      loading={[]}
      loadProducts={loadProductsFn}
      loadCart={loadCartFn}
      {...props}
    />,
  );
};

describe('Test Home page cases', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  test('should display container', () => {
    setup({});
    const container = screen.queryByTestId('homeContainer');
    expect(container).toBeDefined();
  });

  test('should display loading', () => {
    setup({
      loading: [
        {
          LOAD_PRODUCTS: true,
        },
      ],
    });
    const loading = screen.queryByText(/Loading.../i);
    expect(loading).toBeDefined();
  });

  //   test('should render products', () => {
  //     setup({
  //       products,
  //     });
  //   });
});
