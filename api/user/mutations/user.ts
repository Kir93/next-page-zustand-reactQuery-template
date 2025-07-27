import { QueryOptions, useMutation } from '@tanstack/react-query';

import { fetch } from '@config/axios';

import { baseUrl, userTypes } from '..';

export const usePutUser = (
  data: userTypes.User,
  options?: Omit<QueryOptions, 'mutationKey' | 'mutationFn'>
) => {
  const mutationKey = `${baseUrl}/user`;
  const mutationFn = async () =>
    fetch.put(`${mutationKey}?userId=${data.id}`, data).then((res) => res.data);
  return useMutation({ mutationKey: [mutationKey], mutationFn, ...options });
};
