import React, { ComponentProps } from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Button from '../index';
import LockIcon from '@assets/icons/lock.svg';

type Props = {
  icon?: React.ElementType;
} & ComponentProps<'button'>;

const setup = ({ children = 'Sign In', ...props }: Props) => {
  return render(<Button {...props}>{children}</Button>);
};

describe('positive scenarios', () => {
  test('should render Button component', () => {
    setup({});
    const btn = screen.queryByTestId('btn-component');
    expect(btn).not.toBeNull();
    expect(btn?.innerHTML).toBe('Sign In');
  });

  it('take snapshot of basic component', () => {
    const { container } = setup({});
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should button disable if disable prop pass', () => {
    setup({ disabled: true });
    const btn = screen.queryByRole('button');
    expect(btn).toBeDisabled();
    expect(btn).toHaveClass('bg-gray-600');
  });

  test('should button clickable', () => {
    const mockBtn = jest.fn();

    setup({ onClick: mockBtn });
    const btn = screen.queryByRole('button');
    if (btn) {
      fireEvent.click(btn);
      expect(mockBtn).toBeCalledTimes(1);
    }
  });

  test('should icon visible', () => {
    setup({ icon: LockIcon });
    const span = screen.queryByTestId('icon-span');
    expect(span).not.toBeNull();
  });
});
