import React from 'react';
import HeroClient from '@/components/home/hero/HeroClient';
import { SlidesResponseType } from '@/types/slides.types';

const Hero = ({ initialData }: { initialData: SlidesResponseType[] }) => {
  return <HeroClient initialData={initialData} />;
};

export default Hero;
