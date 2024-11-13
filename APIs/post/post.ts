import { QueryOptions, useMutation, useQuery } from '@tanstack/react-query';

import { fetch } from '@configs/axios';
import { TPostAPI } from '.';

export const baseUrl = '/api/post';

export const useGetPosts = (options?: Omit<QueryOptions, 'queryKey' | 'queryFn'>) => {
  const queryKey = `${baseUrl}/posts`;
  const queryFn = async () => fetch.get(`${queryKey}`).then((res) => res.data);
  return useQuery({ queryKey: [queryKey], queryFn, ...options });
};

export const useGetPost = (
  postId: string,
  options?: Omit<QueryOptions, 'mutationKey' | 'mutationFn'>
) => {
  const mutationKey = `${baseUrl}/post`;
  const mutationFn = async () =>
    fetch.get(`${mutationKey}?postId=${postId}`).then((res) => res.data);
  return useMutation({ mutationKey: [mutationKey], mutationFn, ...options });
};

export const useAddPost = (
  data: TPostAPI.IPost,
  options: Omit<QueryOptions, 'mutationKey' | 'mutationFn'>
) => {
  const mutationKey = `${baseUrl}/post`;
  const mutationFn = async () => fetch.post(mutationKey, data).then((res) => res.data);
  return useMutation({ mutationKey: [mutationKey], mutationFn, ...options });
};
