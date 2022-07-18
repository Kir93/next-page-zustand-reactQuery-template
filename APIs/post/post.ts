import { QueryOptions, useMutation, useQuery } from 'react-query';

import { fetch } from '@configs/axios';
import { IPost } from './post.types';

export const baseUrl = '/api/post';

export const useGetPosts = async (options: QueryOptions) => {
  const queryKey = `${baseUrl}/posts`;
  const queryFn = await fetch.get(`${queryKey}`).then((res) => res.data);
  return useQuery([queryKey], queryFn, { ...options });
};

export const useGetPost = async (postId: string, options: QueryOptions) => {
  const queryKey = `${baseUrl}/post`;
  const queryFn = await fetch.get(`${queryKey}?postId=${postId}`).then((res) => res.data);
  return useMutation([queryKey], queryFn, { ...options });
};

export const useAddPost = async (data: IPost, options: QueryOptions) => {
  const queryKey = `${baseUrl}/post`;
  const queryFn = await fetch.post(queryKey, data).then((res) => res.data);
  return useMutation([queryKey], queryFn, { ...options });
};
