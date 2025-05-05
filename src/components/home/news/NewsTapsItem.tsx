import { NewsTapsItemProps } from '@/components/home/news/news.types';
import React from 'react';

const NewsTapsItem = ({
  changeNews,
  onProgressFinish,
  currentTab,
  index,
  news,
}: NewsTapsItemProps) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    if (currentTab !== index) {
      setProgress(0);
      return;
    }

    if (progress === 100) return;

    const interval = setInterval(() => {
      setProgress((prev) => prev + 0.5);
      if (progress === 99) {
        clearInterval(interval);
        onProgressFinish();
      }
    }, 50);
    return () => clearInterval(interval);
  }, [progress, onProgressFinish]);

  return (
    <button onClick={changeNews} className="relative w-full h-full group">
      {index !== currentTab ? (
        <span
          style={{ width: currentTab > index ? '100%' : `0%` }}
          className="absolute w-full h-[3px] bg-(--color-green-primary)/40 top-0 left-0 rounded-full group-hover:!w-full transition z-20"
        ></span>
      ) : null}
      <span
        style={{ width: currentTab > index ? '100%' : `${progress}%` }}
        className="absolute w-full h-[3px] bg-(--color-green-primary) top-0 left-0 rounded-full transition z-10"
      ></span>
      <span className="absolute w-full h-[3px] bg-white top-0 left-0 rounded-full"></span>
      <p className="h-full min-h-full mt-[16px] font-bold text-[12px] sm:text-[20px] leading-none tracking-normal text-center transition line-clamp-2 sm:line-clamp-1">
        {news.Title}
      </p>
    </button>
  );
};

export default NewsTapsItem;
