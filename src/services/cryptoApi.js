import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//const baseUrl = "https://coinranking1.p.rapidapi.com";

//const cryptoAPiHeaders = {
//"x-rapidapi-host": "coinranking1.p.rapidapi.com",
//"x-rapidapi-key": "d7e37045f7mshdd1922af53b0800p1486a6jsnb2f6af26702a",
//};

//const createRequest = (url) => ({ url, headers: cryptoAPiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://coinranking1.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set("x-rapidapi-host", "coinranking1.p.rapidapi.com");
      headers.set(
        "x-rapidapi-key",
        "d7e37045f7mshdd1922af53b0800p1486a6jsnb2f6af26702a"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCrypto: builder.query({
      query: (count) => `/coins?limit=${count}`,
    }),
    getCryptoDetail: builder.query({
      query: (coinId) => `/coin/${coinId}`,
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) =>
        `/coin/${coinId}/history?timePeriod=${timePeriod}`,
    }),
  }),
});

export const {
  useGetCryptoQuery,
  useGetCryptoDetailQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;
