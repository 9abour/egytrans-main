import { getSlides } from '@/services/sliders.api';
import { SlidesResponseType } from '@/types/slides.types';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

interface UseHeroParameters {
  currentSlider: number;
  setCurrentSlider: React.Dispatch<React.SetStateAction<number>>;
  slides?: SlidesResponseType[];
  heroSectionStyle: Record<string, string>;
  hereContentStyle: Record<string, string>;
}

export const useHero = (
  initialData: SlidesResponseType[]
): UseHeroParameters => {
  const { data: slidesData } = useQuery({
    queryKey: ['slides'],
    queryFn: () => getSlides(),
    initialData: { data: initialData },
  });
  const slides = slidesData?.data;

  const [currentSlider, setCurrentSlider] = React.useState(0);

  const heroSectionStyle = {
    ['top-left']: 'items-start',
    ['top-center']: 'items-start',
    ['top-right']: 'items-start',
    ['center-left']: 'items-center',
    ['center']: 'items-center',
    ['center-right']: 'items-center',
    ['bottom-left']: 'items-end',
    ['bottom-center']: 'items-end',
    ['bottom-right']: 'items-end',
  };

  const hereContentStyle = {
    ['top-left']: 'items-start',
    ['top-center']: 'justify-center',
    ['top-right']: 'justify-end',
    ['center-left']: 'items-start',
    ['center']: 'justify-center',
    ['center-right']: 'justify-end',
    ['bottom-left']: 'justify-start',
    ['bottom-center']: 'justify-center',
    ['bottom-right']: 'justify-end',
  };

  React.useEffect(() => {
    if (!slides?.length) return;

    const interval = setInterval(() => {
      setCurrentSlider((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides]);

  return {
    currentSlider,
    setCurrentSlider,
    slides,
    heroSectionStyle,
    hereContentStyle,
  };
};
