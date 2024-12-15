import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from './BaseQuery';

const Api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['eventsGet', 'studentsTodosGet'],

  endpoints: _builder => ({}),
});

export default Api;
