import { Component } from 'react';

interface ErrorButtonState {
  throwError: boolean;
}

class ErrorButton extends Component<object, ErrorButtonState> {
  constructor(props: object) {
    super(props);
    this.state = {
      throwError: false,
    };
  }
  triggerError = (): void => {
    this.setState({ throwError: true });
  };

  render(): JSX.Element {
    if (this.state.throwError) {
      throw new Error('Intentional error triggered by ErrorButton!');
    }

    return (
      <>
        <button className="button" onClick={this.triggerError}>
          Error Button <i className="bi bi-exclamation-octagon-fill"></i>
        </button>
      </>
    );
  }
}

export { ErrorButton };
