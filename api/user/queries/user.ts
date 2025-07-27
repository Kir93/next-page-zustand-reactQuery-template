import { QueryOptions, useQuery } from '@tanstack/react-query';

import { fetch } from '@config/axios';

import { baseUrl } from '..';

export const useGetUser = (userId: string, options?: QueryOptions) => {
  const queryKey = `${baseUrl}/user`;
  const queryFn = async () => fetch.get(`${queryKey}?userId=${userId}`).then((res) => res.data);
  return useQuery({ queryKey: [queryKey, userId], queryFn, ...options });
};
