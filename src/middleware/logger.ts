import { Middleware } from 'redux';
import { RootState } from 'types/commonTypes';

const loggerMiddleware: Middleware<
  {}, // Most middleware do not modify the dispatch return value
  RootState
> =
  ({ getState, dispatch }) =>
  (next) =>
  (action) => {
    // without this line store will not update
    const matches = /(.*)_(FAIL)/.exec(action.type);
    if (matches) {
      // write your analytics code here
      console.error(action.error);
    }

    next(action);
  };

export default loggerMiddleware;
