import { QueryOptions, useQuery } from '@tanstack/react-query';

import { fetch } from '@config/axios';

import { baseUrl } from '..';

export const useGetPosts = (options?: Omit<QueryOptions, 'queryKey' | 'queryFn'>) => {
  const queryKey = `${baseUrl}/posts`;
  const queryFn = async () => fetch.get(`${queryKey}`).then((res) => res.data);
  return useQuery({ queryKey: [queryKey], queryFn, ...options });
};

export const useGetPost = (
  postId: string,
  options?: Omit<QueryOptions, 'mutationKey' | 'mutationFn'>
) => {
  const queryKey = `${baseUrl}/post`;
  const queryFn = async () => fetch.get(`${queryKey}?postId=${postId}`).then((res) => res.data);
  return useQuery({ queryKey: [queryKey, postId], queryFn, ...options });
};
