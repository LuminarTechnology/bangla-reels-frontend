import { baseApi } from "../../api/baseApi";
import { UserState } from "./userTypes";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<UserState, string>({
      query: (id) => `/user/${id}`,
      providesTags: ["User"],
    }),
    updateUser: builder.mutation<UserState, Partial<UserState>>({
      query: (data) => ({
        url: "/user/update",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetUserQuery, useUpdateUserMutation } = userApi;
