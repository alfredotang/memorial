import { useState, useLayoutEffect, useRef, RefObject } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
type Bounds = { left: number; top: number; width: number; height: number };

type UseMeasure = { ref: RefObject<any>; bounds: Bounds };

function useMeasure(): UseMeasure {
  const ref = useRef<any>(null);
  const [bounds, setBounds] = useState<Bounds>({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });
  const [ro] = useState(
    () => new ResizeObserver(([entry]) => setBounds(entry.contentRect))
  );

  useLayoutEffect(() => {
    if (ref.current) {
      ro.observe(ref.current);
    }
    return () => ro.disconnect();
  }, [ro]);

  return { ref, bounds };
}

export default useMeasure;
