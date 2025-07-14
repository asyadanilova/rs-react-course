import { Component, ReactNode } from 'react';

interface Props {
  fallbackUI: ReactNode;
  children?: ReactNode;
}
interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static defaultProps: Partial<Props> = {
    fallbackUI: (
      <div className="fallback">
        <h1 className="header">Oops! Something went wrong.</h1>
        <button
          onClick={() => window.location.reload()}
          style={{ marginTop: '10px' }}
        >
          Reload the page
        </button>
      </div>
    ),
  };

  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return this.props.fallbackUI;
    }
    return this.props.children;
  }
}

export { ErrorBoundary };
