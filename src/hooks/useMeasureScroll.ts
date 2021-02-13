import { useEffect, useState } from 'react';

type UseMeasureScroll = { scrollY: number; scrollX: number };
type UseMeasureScrollProps = { switchOn: boolean };

const useMeasureScroll = ({
  switchOn,
}: UseMeasureScrollProps): UseMeasureScroll => {
  const [value, setValue] = useState<UseMeasureScroll>({
    scrollX: 0,
    scrollY: 0,
  });

  useEffect(() => {
    if (switchOn) {
      const handleScroll = () => {
        setValue(() => {
          return { scrollX: window.scrollX, scrollY: window.scrollY };
        });
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [switchOn]);

  return value;
};

export default useMeasureScroll;
