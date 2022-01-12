import debounce from 'lodash.debounce';
import { useEffect, useMemo } from 'react';

const useDebounce = (fn, time, options) => {
  const debounceFn = useMemo(() => debounce(fn, time || 500, options), [fn]);

  useEffect(
    () => () => {
      debounceFn.cancel();
    },
    [debounceFn],
  );

  return debounceFn;
};

export default useDebounce;
