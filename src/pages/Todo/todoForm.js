import React, { forwardRef, memo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { ThemeConsumer } from '../../context/themeContext';
import { LocaleConsumer } from '../../context/localeContext';

const TodoForm = forwardRef(({ addTodo, httpStatus }, ref) => {
  console.log('TodoForm render');
  return (
    <>
      <ThemeConsumer>
        {({ theme, toggleTheme }) => {
          console.log('todo form theme consumer rerender');
          return (
            <div>
              <p>{`Current Theme: ${theme}`}</p>
              <button
                type="button"
                className="btn-primary"
                onClick={toggleTheme}
              >
                Change Theme
              </button>
            </div>
          );
        }}
      </ThemeConsumer>

      <LocaleConsumer>
        {({ locale, toggleLocale }) => {
          console.log('todo form locale consumer rerender');
          return (
            <div>
              <p>{`Current Locale: ${locale}`}</p>
              <button
                type="button"
                className="btn-primary"
                onClick={toggleLocale}
              >
                Change Locale
              </button>
            </div>
          );
        }}
      </LocaleConsumer>
      <form className="flex justify-center my-2" onSubmit={addTodo}>
        <input type="text" className="input" ref={ref} />
        <button
          type="submit"
          className={cn({
            'btn-primary': httpStatus?.status !== 'REQUEST',
            'btn-disabled': httpStatus?.status === 'REQUEST',
          })}
          disabled={httpStatus?.status === 'REQUEST'}
        >
          Add Todo
        </button>
      </form>
      {httpStatus?.status === 'FAIL' && (
        <p className="text-center text-red-600">
          {httpStatus?.payload.message}
        </p>
      )}
    </>
  );
});

TodoForm.displayName = 'TodoForm';

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  httpStatus: PropTypes.shape({
    type: PropTypes.string,
    payload: PropTypes.objectOf(Error),
    status: PropTypes.oneOf(['REQUEST', 'FAIL']),
  }),
};

TodoForm.defaultProps = {
  httpStatus: undefined,
};

export default memo(TodoForm);
