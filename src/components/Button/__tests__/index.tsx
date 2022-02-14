import React, { ComponentProps } from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../index';
import LockIcon from '@assets/icons/lock.svg';

type Props = {
  icon?: React.ElementType;
} & ComponentProps<'button'>;

const setup = ({ children = 'Sign In', icon, ...props }: Props) => {
  return render(<Button {...props}>{children}</Button>);
};

test('should render Button component', () => {
  const { queryByTestId } = setup({});
  const btn = queryByTestId('btn-component');
  expect(btn).not.toBeNull();
  expect(btn?.innerHTML).toBe('Sign In');
});

test('should button disable if disable prop pass', () => {
  const { queryByRole } = setup({ disabled: true });
  const btn = queryByRole('button');
  expect(btn).toBeDisabled();
  expect(btn).toHaveClass('bg-gray-600');
});

test('should button clickable', () => {
  const mockBtn = jest.fn();

  const { queryByRole } = setup({ onClick: mockBtn });
  const btn = queryByRole('button');
  if (btn) {
    fireEvent.click(btn);
    expect(mockBtn).toBeCalledTimes(1);
  }
});

test('should icon visible', () => {
  const { queryByRole, queryByTestId } = setup({ icon: <LockIcon /> });
  const btn = queryByRole('button');
  const span = queryByTestId('icon-span');
  expect(btn).toContainElement(span);
});
