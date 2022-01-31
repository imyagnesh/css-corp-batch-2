import { LoadingType } from 'types/customTypes';

export default (state: any, action: LoadingType) => {
  const matches = /(.*)_(REQUEST|SUCCESS|FAIL)/.exec(action.type);
  if (!matches) return state;

  const id = action.processId ? `_${action.processId}` : '';

  if (matches[2] === 'REQUEST') {
    return { ...state, [`${matches[1]}${id}`]: true };
  }

  const { [`${matches[1]}${id}`]: data, ...loading } = state.loading;

  return loading;
};
