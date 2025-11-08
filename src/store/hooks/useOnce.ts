import { useEffect, useRef } from "react";

export const useOnce = (callback: Function, enabled: boolean) => {
  const isCalled = useRef<boolean>(false);

  useEffect(() => {
    if (enabled && !isCalled.current) {
      isCalled.current = true;
      callback();
    }
  }, [enabled, callback]);
};
