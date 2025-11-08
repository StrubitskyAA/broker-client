import { useEffect, useState } from "react";

const useDebounce = (text: string, delay: number) => {
  const [debounceValue, setDebounceValue] = useState(text);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebounceValue(text);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text, delay]);

  return debounceValue;
};

export default useDebounce;
