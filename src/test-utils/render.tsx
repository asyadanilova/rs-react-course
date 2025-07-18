import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';

const customRender = (ui: ReactElement, options?: RenderOptions) => {
  return render(ui, {
    ...options,
  });
};

export { customRender as render };
