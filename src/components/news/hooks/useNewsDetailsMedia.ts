import { NewsResponseType } from '@/types/news.types';
import React, { useEffect } from 'react';

export const useNewsDetailsMedia = (news: NewsResponseType) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  useEffect(() => {
    setInterval(() => {
      if (activeIndex === news.Media.length - 1) {
        setActiveIndex(0);
      } else {
        setActiveIndex(activeIndex + 1);
      }
    }, 5000);
  }, []);

  const handleNext = () => {
    if (activeIndex === news.Media.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex === 0) {
      setActiveIndex(news.Media.length - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };

  return { activeIndex, setActiveIndex, handleNext, handlePrev };
};
