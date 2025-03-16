import { useCallback } from 'react';

import { useRouter } from 'next/router';

/**
 * 뒤로 가기 기능을 제공하는 커스텀 훅.
 *
 * - 브라우저의 히스토리 길이가 2 이하이면 기본 경로(`defaultPath`)로 이동.
 * - 그렇지 않으면 `window.history.back()`을 호출하여 이전 페이지로 이동.
 *
 * @param {string} [defaultPath='/'] - 히스토리 길이가 짧을 때 대체로 이동할 경로 (기본값: '/').
 * @returns 뒤로 가기 기능을 실행하는 함수.
 *
 * @example
 * ```tsx
 * const goBack = useBack('/home');
 * <button onClick={goBack}>뒤로 가기</button>
 * ```
 */
const useBack = (defaultPath = '/') => {
  const router = useRouter();

  const goBack = useCallback(() => {
    // SSR에서 window 객체가 없을 수 있기 때문에 체크
    if (typeof window === 'undefined') {
      router.replace(defaultPath);
      return;
    }

    if (window.history.length <= 2) {
      router.replace(defaultPath); // 히스토리 부족 시 안전한 기본 경로로 이동
    } else {
      router.back(); // 충분한 히스토리 스택이 있으면 일반적인 뒤로 가기 수행
    }
  }, [router, defaultPath]);

  return goBack;
};

export default useBack;
