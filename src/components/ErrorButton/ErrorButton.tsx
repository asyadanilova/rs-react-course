import { useState } from 'react';

const ErrorButton: React.FC = () => {
  const [throwError, setThrowError] = useState(false);

  const triggerError = () => {
    setThrowError(true);
  };

  if (throwError) {
    throw new Error('Intentional error triggered by ErrorButton!');
  }

  return (
    <button className="button" onClick={triggerError}>
      Error Button <i className="bi bi-exclamation-octagon-fill"></i>
    </button>
  );
};

export { ErrorButton };
