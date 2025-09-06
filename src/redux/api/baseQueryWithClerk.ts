import { getClerkToken } from "@/src/lib/getClerkToken";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const customBaseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  prepareHeaders: async (headers) => {
    const token = await getClerkToken();
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});
