import { useCallback, useState } from 'react';

const useInput = <T>(
  initValue: T,
): [
  T,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  React.Dispatch<React.SetStateAction<T>>,
] => {
  const [value, setter] = useState(initValue);
  const handler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setter(e.target.value as unknown as T),
    [],
  );
  return [value, handler, setter];
};

export default useInput;
