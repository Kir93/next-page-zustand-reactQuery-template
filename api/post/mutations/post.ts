import { QueryOptions, useMutation } from '@tanstack/react-query';

import { fetch } from '@config/axios';

import { baseUrl, postTypes } from '..';

export const useAddPost = (
  data: postTypes.Post,
  options: Omit<QueryOptions, 'mutationKey' | 'mutationFn'>
) => {
  const mutationKey = `${baseUrl}/post`;
  const mutationFn = async () => fetch.post(mutationKey, data).then((res) => res.data);
  return useMutation({ mutationKey: [mutationKey], mutationFn, ...options });
};
