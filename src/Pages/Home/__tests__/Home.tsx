import React from 'react';
import {
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
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
  beforeAll(() => {
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
      {
        id: 2,
        title: 'Mens Casual Premium Slim Fit T-Shirts ',
        price: 22.3,
        description:
          'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
        category: "men's clothing",
        image:
          'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
        rating: {
          rate: 4.1,
          count: 259,
        },
      },
    ]);
    mock.onGet('660/cart').reply(200, [
      {
        productId: 2,
        quantity: 1,
        id: 1,
      },
    ]);
  });

  afterAll(() => {
    jest.clearAllMocks();
    mock.resetHistory();
  });

  test('should take snapshot', () => {
    const { container } = setup({});
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should take snapshot of product', async () => {
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
    setup({});
    const products = await screen.findAllByTestId('productContainer');
    expect(products.length).toBe(2);
  });

  test('should display add to cart button if item not available in cart', async () => {
    setup({});
    const products = await screen.findAllByTestId('productContainer');
    const addToCartBtn = screen.queryByRole('button', {
      name: 'Add to bag',
    });
    expect(products[0]).toContainElement(addToCartBtn);
    expect(products[1]).not.toContainElement(addToCartBtn);
  });

  test('should display modify section if item exist in cart', async () => {
    setup({});
    const products = await screen.findAllByTestId('productContainer');
    const modifyCartItem = screen.queryByTestId('modifyProduct');
    expect(products[1]).toContainElement(modifyCartItem);
    expect(products[0]).not.toContainElement(modifyCartItem);
  });

  test('should click add to cart button if item not available in cart', async () => {
    mock.onPost('660/cart').reply(201, {
      productId: 1,
      quantity: 1,
      id: 2,
    });
    setup({});
    await screen.findAllByTestId('productContainer');
    const addToCartBtn = screen.queryByRole('button', {
      name: 'Add to bag',
    });
    if (addToCartBtn) {
      fireEvent.click(addToCartBtn);
    }
    await waitForElementToBeRemoved(addToCartBtn);
    expect(addToCartBtn).not.toBeInTheDocument();
  });

  test('should click delete button to remove item from cart', async () => {
    mock.onDelete('660/cart/1').reply(200, {});
    setup({});
    const products = await screen.findAllByTestId('productContainer');
    const modifyCartItem = screen.queryByTestId('modifyProduct');
    expect(products[1]).toContainElement(modifyCartItem);
    const deleteBtn = screen.queryByRole('button', {
      name: 'Delete',
    });
    if (deleteBtn) {
      fireEvent.click(deleteBtn);
      await waitForElementToBeRemoved(deleteBtn);
      expect(deleteBtn).not.toBeInTheDocument();
    }
  });

  test('should edit quantity', async () => {
    mock.onPut('660/cart/1').reply(200, {
      productId: 2,
      quantity: 5,
      id: 1,
    });
    setup({});
    const products = await screen.findAllByTestId('productContainer');
    const modifyCartItem = screen.queryByTestId('modifyProduct');
    expect(products[1]).toContainElement(modifyCartItem);
    const quantitySelect = screen.queryByRole('combobox');
    expect(quantitySelect).toHaveValue('1');

    if (quantitySelect) {
      fireEvent.change(quantitySelect, {
        target: {
          value: '5',
        },
      });
      await waitFor(() => expect(quantitySelect).toHaveValue('5'));
    }
  });
});
