import { baseApi } from "../../api/baseApi";

export const postsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<any[], void>({
      query: () => "/posts",
      providesTags: ["Posts"],
    }),
    addPost: builder.mutation<any, { title: string; content: string }>({
      query: (data) => ({
        url: "/posts",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Posts"],
    }),
  }),
});

export const { useGetPostsQuery, useAddPostMutation } = postsApi;
