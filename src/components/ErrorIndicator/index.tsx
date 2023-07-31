import React from 'react';

interface IErrorIndicatorProps {
  message?: string;
}

const defaultErrorMessage = 'Something went wrong.';

const ErrorIndicator = ({message}: IErrorIndicatorProps) => {
  return <h1>{message || defaultErrorMessage}</h1>;
};

export default ErrorIndicator;
