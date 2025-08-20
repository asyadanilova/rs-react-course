import '@testing-library/jest-dom';

process.on('unhandledRejection', (reason) => {
  console.error('Unhandled Rejection:', reason);
});