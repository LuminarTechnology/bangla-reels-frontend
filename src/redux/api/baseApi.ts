import { createApi } from "@reduxjs/toolkit/query/react";
import { customBaseQuery } from "./baseQueryWithClerk";

// export const baseApi = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({
//     baseUrl: process.env.NEXT_PUBLIC_API_URL,
//     prepareHeaders: (headers, { getState }) => {
//       const token = (getState() as RootState).auth.token;
//       // console.log("token", token);
//       if (token) headers.set("authorization", `Bearer ${token}`);
//       return headers;
//     },
//   }),
//   tagTypes: ["User", "Posts"],
//   endpoints: () => ({}),
// });

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: customBaseQuery,
  tagTypes: ["User", "Posts"],
  endpoints: () => ({}),
});
