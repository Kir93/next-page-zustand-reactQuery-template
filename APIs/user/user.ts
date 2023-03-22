import { QueryOptions, useMutation, useQuery } from '@tanstack/react-query';

import { fetch } from '@configs/axios';
import { TUserAPI } from '.';

export const baseUrl = '/api/user';

export const useGetUser = async (userId: string, options: QueryOptions) => {
  const queryKey = `${baseUrl}/user`;
  const queryFn = await fetch.get(`${queryKey}?userId=${userId}`).then((res) => res.data);
  return useQuery([queryKey, userId], queryFn, { ...options });
};

export const usePutUser = async (data: TUserAPI.IUser, options: QueryOptions) => {
  const queryKey = `${baseUrl}/user`;
  const queryFn = await fetch.put(`${queryKey}?userId=${data.id}`, data).then((res) => res.data);
  return useMutation([queryKey, data.id], queryFn, { ...options });
};
