import React from 'react';

const SwitchCarouselSlides = ({
  slides,
  currentSlide,
  setCurrentSlide,
}: {
  slides: number;
  currentSlide: number;
  setCurrentSlide: (slide: number) => void;
}) => {
  return (
    <>
      {[...Array(slides)].map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentSlide(index)}
          className={`${
            index === currentSlide ? '!bg-(--color-blue-primary)' : ''
          }`}
        />
      ))}
    </>
  );
};

export default SwitchCarouselSlides;
