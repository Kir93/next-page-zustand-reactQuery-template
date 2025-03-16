import { useCallback, useState } from 'react';

/**
 * 폼 입력값 상태를 관리하고 변경 핸들러를 제공하는 커스텀 훅
 *
 * @template T - 입력값의 타입
 * @param initValue - 입력값의 초기값
 * @returns 다음을 포함하는 튜플:
 *  - 현재 입력값
 *  - 입력 요소의 변경 이벤트 핸들러
 *  - 값을 직접 업데이트하는 설정자 함수
 *
 * @example
 * ```typescript
 * const [value, handleChange, setValue] = useInput<string>("");
 * // 입력 요소에서 사용:
 * <input value={value} onChange={handleChange} />
 * ```
 */
const useInput = <T>(
  initValue: T
): [
  T,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  React.Dispatch<React.SetStateAction<T>>
] => {
  const [value, setter] = useState(initValue);
  const handler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setter(e.target.value as unknown as T),
    []
  );
  return [value, handler, setter];
};

export default useInput;
