'use client';

import React from 'react';
import SwitchCarouselSlides from '@/components/home/hero/SwitchCarouselSlides';
import Arrow from '@public/Arrow-03.svg';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useHero } from '@/components/home/hero/hooks/useHero';
import { useCurrentLanguage } from '@/hooks/useCurrentLanguage';
import getAdminImagePath from '@/utils/getAdminImagePath';
import { SlidesResponseType } from '@/types/slides.types';

const HeroClient = ({ initialData }: { initialData: SlidesResponseType[] }) => {
  const {
    currentSlider,
    slides,
    setCurrentSlider,
    heroSectionStyle,
    hereContentStyle,
  } = useHero(initialData);

  const currentLanguage = useCurrentLanguage();

  return (
    <motion.section className={cn('relative')}>
      <motion.div
        key={currentSlider}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          backgroundImage: `url(${getAdminImagePath(
            slides?.[currentSlider]?.Image
          )})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        dir={'ltr'}
        className={cn(
          'relative w-screen h-screen max-h-[600px] sm:max-h-[776px] pt-[129px] sm:p-[109px] !pb-0 hero-section flex',
          heroSectionStyle[String(slides?.[currentSlider]?.Position)]
        )}
      >
        <motion.div
          className={cn(
            'relative container flex flex-col sm:flex-row my-4 sm:my-[65px] !px-4 z-10',
            hereContentStyle[String(slides?.[currentSlider]?.Position)]
          )}
        >
          <Image
            src={Arrow}
            alt="arrow"
            width={70}
            height={70}
            className="mb-auto"
          />

          <div className="max-w-[918px] tracking-tight">
            <h1 className="font-bold text-[32px] sm:text-[64px] leading-none tracking-normal text-white">
              {slides?.[currentSlider]?.Main_title}
            </h1>
            <p className="font-normal text-[24px] leading-none tracking-normal text-white mt-4">
              {slides?.[currentSlider]?.Sub_title}
            </p>
          </div>
        </motion.div>
      </motion.div>

      <div
        className={cn(
          'absolute h-fit left-1/2 sm:left-auto -translate-x-1/2 sm:right-8 bottom-4 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 flex sm:grid gap-4 [&>button]:w-[20px] [&>button]:h-[20px] [&>button]:bg-white [&>button]:rounded-full [&>button]:hover:bg-(--color-blue-primary) [&>button]:transition',
          currentLanguage === 'ar' && 'sm:left-8 sm:right-auto'
        )}
      >
        <SwitchCarouselSlides
          slides={slides?.length || 0}
          currentSlide={currentSlider}
          setCurrentSlide={setCurrentSlider}
        />
      </div>
    </motion.section>
  );
};

export default HeroClient;
