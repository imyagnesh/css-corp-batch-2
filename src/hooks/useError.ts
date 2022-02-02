import { AuthContext } from 'context/authContext';
import { useCallback, useContext } from 'react';

const useError = () => {
  const { onLogout } = useContext(AuthContext);

  const handleError = useCallback(
    (error: any) => {
      let message = 'Something went wrong. Please try after sometime.';
      console.log(error);

      if (error instanceof Error) {
        message = error.message;
      }
      if (message === 'jwt expired') {
        onLogout();
      }
      return message;
    },
    [onLogout],
  );

  return handleError;
};

export default useError;
