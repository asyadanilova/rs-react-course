import { vi } from 'vitest';

export const searchUniversities = vi.fn<() => Promise<University[]>>(
  async () => []
);
