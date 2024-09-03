import { QueryOptions, useMutation, useQuery } from '@tanstack/react-query';

import { fetch } from '@configs/axios';
import { TPostAPI } from '.';

export const baseUrl = '/api/post';

export const useGetPosts = async (options: QueryOptions) => {
  const queryKey = `${baseUrl}/posts`;
  const queryFn = await fetch.get(`${queryKey}`).then((res) => res.data);
  return useQuery({ queryKey: [queryKey], queryFn, ...options });
};

export const useGetPost = async (postId: string, options: QueryOptions) => {
  const queryKey = `${baseUrl}/post`;
  const queryFn = await fetch.get(`${queryKey}?postId=${postId}`).then((res) => res.data);
  return useMutation({ queryKey: [queryKey], queryFn, ...options });
};

export const useAddPost = async (data: TPostAPI.IPost, options: QueryOptions) => {
  const queryKey = `${baseUrl}/post`;
  const queryFn = await fetch.post(queryKey, data).then((res) => res.data);
  return useMutation({ queryKey: [queryKey], queryFn, ...options });
};
