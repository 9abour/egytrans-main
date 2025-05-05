'use client';

import type { CustomCountUp } from '@/components/home/stats/stats.types';
import React, { useRef, useState } from 'react';
import CountUp from 'react-countup';

const CustomCountUp = ({ start, end, duration }: CustomCountUp) => {
  const [isVisible, setIsVisible] = useState(false);
  const countUpRef = useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (countUpRef.current) {
      observer.observe(countUpRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={countUpRef}>
      {isVisible ? <CountUp start={start} end={end} duration={duration} /> : 0}
    </div>
  );
};

export default CustomCountUp;
