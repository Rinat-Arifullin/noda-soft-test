import React, {ErrorInfo} from 'react';

import ErrorIndicator from 'components/ErrorIndicator';

interface IErrorBoundaryProps {
  children: React.ReactNode;
}

interface IErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = {hasError: false};
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({hasError: true});
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
