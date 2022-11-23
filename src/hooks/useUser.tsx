import { useQuery } from '@tanstack/react-query';
import { getUser } from '../api/user';

export const QK_USER = 'user';

export function useUser() {
  const res = useQuery([QK_USER], () => getUser(), {
    keepPreviousData: true,
    enabled: true,
    refetchOnWindowFocus: true,
  });
  return res;
}