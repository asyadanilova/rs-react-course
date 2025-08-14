import { University } from '@/utils/consts';
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
    getUniversities: builder.query<University[], undefined>({
      query: () => `/search?&limit=15`,
    }),
  }),
});

export const { useSearchUniversitiesQuery, useGetUniversitiesQuery } =
  universityApi;
