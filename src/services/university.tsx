import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const universityApi = createApi({
  reducerPath: 'universityApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    searchUniversities: builder.query<
      University[],
      { country: string; searchKey: number }
    >({
      query: ({ country }) => `/search?&country=${country}`,
    }),
  }),
});

export const { useSearchUniversitiesQuery } = universityApi;
