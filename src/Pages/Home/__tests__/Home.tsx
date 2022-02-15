import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../index';
import { Provider } from 'react-redux';
import MockAdapter from 'axios-mock-adapter';
import store from '../../../configureStore';
import axiosInstance from 'utils/axios';

const mock = new MockAdapter(axiosInstance);

// const mockedAxios = axiosInstance as jest.Mocked<typeof axiosInstance>;

const setup = ({ ...props }) => {
  return render(
    <Provider store={store}>
      <Home />
    </Provider>,
  );
};

describe('Test Home page cases', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  test('should take snapshot', () => {
    const { container } = setup({});
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should take snapshot of product', async () => {
    mock.onGet('660/products').reply(200, [
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
    ]);
    mock.onGet('660/cart').reply(200, [
      {
        productId: 1,
        quantity: 1,
        id: 2,
      },
    ]);
    const { container, findAllByTestId } = setup({});
    const products = await findAllByTestId('productContainer');
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should display loading...', () => {
    setup({});
    const container = screen.queryByTestId('homeContainer');
    expect(container).toBeDefined();
    const loading = screen.queryByText(/Loading.../i);
    expect(loading).toBeDefined();
  });

  test('should load products data', async () => {
    mock.onGet('660/products').reply(200, [
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
    ]);
    mock.onGet('660/cart').reply(200, [
      {
        productId: 1,
        quantity: 1,
        id: 2,
      },
    ]);
    setup({});
    const products = await screen.findAllByTestId('productContainer');
    expect(products.length).toBe(1);
  });

  //   test('should render products', () => {
  //     setup({
  //       products,
  //     });
  //   });
});
