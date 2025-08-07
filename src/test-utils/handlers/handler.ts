import { http, HttpResponse } from 'msw';
import { basicMockUniversities } from '../mocks/mockData';

export const handlers = [
  http.get('/api/search', () => {
    return HttpResponse.json(basicMockUniversities);
  }),
];
