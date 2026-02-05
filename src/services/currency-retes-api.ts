import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IRatesResponse } from "../ts-types";

const currencyRatesApi = createApi({
  reducerPath: "currencyRates",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.vatcomply.com" }),
  endpoints: (build) => ({
    getRates: build.query<IRatesResponse, void>({ query: () => "/rates" }),
  }),
  keepUnusedDataFor: 5,
  refetchOnReconnect: true,
});

export const { useGetRatesQuery } = currencyRatesApi;

export default currencyRatesApi;
