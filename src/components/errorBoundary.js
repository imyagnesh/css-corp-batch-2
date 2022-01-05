import React, { PureComponent } from 'react';

class ErrorBoundary extends PureComponent {
  state = {
    error: null,
  };

  static getDerivedStateFromError(error) {
    return {
      error,
    };
  }

  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }

  render() {
    const { children } = this.props;
    const { error } = this.state;

    if (error) {
      return <h1>{error.message}</h1>;
    }

    return children;
  }
}

export default ErrorBoundary;
