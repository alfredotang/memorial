import { useMediaQuery } from '@chakra-ui/react';

type DefaultVariants = string | null;
type UseRWDProps<T> = [T, T, T];

function useRWD<T = DefaultVariants>(params: UseRWDProps<T>): T {
  const [isLargeThen_md] = useMediaQuery('screen and (min-width: 30em)');
  const [isLargeThen_lg] = useMediaQuery('screen and (min-width: 48em)');
  const [sm, md, lg] = params;

  if (lg && isLargeThen_lg) {
    return lg;
  }

  if (md && isLargeThen_md) {
    return md;
  }

  if (sm) {
    return sm;
  }

  throw Error(`custom hook - useRWD params is undefined`);
}

export default useRWD;
