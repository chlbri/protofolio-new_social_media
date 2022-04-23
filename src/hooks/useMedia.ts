import { useEffect, useState } from 'react';

export function useMedia<T>(
  queries: string[],
  values: T[],
  defaultValue: T,
) {
  const mediaQueryLists = queries.map(q => window.matchMedia(q));
  const getValue = () => {
    const index = mediaQueryLists.findIndex(mql => mql.matches);
    return values?.[index] || defaultValue;
  };

  const [value, setValue] = useState<T>(getValue);
  
  useEffect(
    () => {
      const handler = () => setValue(getValue);
      mediaQueryLists.forEach(mql =>
        mql.addEventListener('change', handler),
      );
      return () =>
        mediaQueryLists.forEach(mql =>
          mql.removeEventListener('change', handler),
        );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
  return value;
}
