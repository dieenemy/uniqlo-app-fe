import React from 'react';
import ErrorHappen from '../error-happen/error-happen.component';

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return <ErrorHappen />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
