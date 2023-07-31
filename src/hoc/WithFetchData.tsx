import React, {ReactNode} from 'react';

import LoadingIndicator from 'components/LoadingIndicator';
import ErrorIndicator from 'components/ErrorIndicator';

interface IWithFetchDataProps {
  isLoading: boolean;
  error: Error | null;
  children: ReactNode;
}

const WithFetchData = ({isLoading, error, children}: IWithFetchDataProps) => {
  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator message={error.message} />;
  }

  return <>{children}</>;
};

export default WithFetchData;
