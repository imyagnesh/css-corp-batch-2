import { ErrorType } from 'types/customTypes';

export default (state: any, action: ErrorType) => {
  const matches = /(.*)_(REQUEST|FAIL)/.exec(action.type);
  if (!matches) return state;

  const id = action.processId ? `_${action.processId}` : '';

  if (matches[2] === 'FAIL') {
    return { ...state, [`${matches[1]}${id}`]: action.error };
  }

  const { [`${matches[1]}${id}`]: data, ...loading } = state.loading;

  return loading;
};
