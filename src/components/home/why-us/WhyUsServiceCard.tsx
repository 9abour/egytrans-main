'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { WhyUsServiceCardProps } from '@/components/home/why-us/why-us.types';
import React from 'react';
import Image from 'next/image';
import { cn } from '@/utils/cn';

const WhyUsServiceCard = ({
  title,
  description,
  icons,
}: WhyUsServiceCardProps) => {
  const [hovering, setHovering] = React.useState(false);
  const descriptionRef = React.useRef<HTMLParagraphElement>(null);
  const [descriptionHeight, setDescriptionHeight] = React.useState(0);

  React.useEffect(() => {
    if (hovering && descriptionRef.current) {
      setDescriptionHeight(descriptionRef.current.scrollHeight);
    }
  }, [hovering]);

  return (
    <div className="h-[270px]">
      <motion.div
        className={cn(
          'relative w-[194px] overflow-hidden pt-[120px] px-4 pb-4 flex flex-col items-center min-h-[189px] max-h-[270px] bg-[#F2F2F2] rounded-[25px] hover:bg-[#009548] text-[#808080] hover:text-white transition-colors duration-500'
        )}
        onHoverStart={() => setHovering(true)}
        onHoverEnd={() => setHovering(false)}
        initial={{ height: 189, transition: { duration: 0.5 } }}
        animate={{ height: hovering ? 189 + descriptionHeight : 189 }}
        exit={{ transition: { duration: 0.5 } }}
      >
        <Image
          src={(hovering ? icons.blue : icons.white) || ''}
          alt="icon"
          width={100}
          height={100}
          className="absolute top-4 mx-auto"
        />

        <p className="font-bold text-[20px] leading-[140%] tracking-normal">
          {title}
        </p>

        <AnimatePresence>
          {hovering ? (
            <motion.p
              className="font-normal text-center text-[16px] leading-[140%] tracking-normal mt-2 line-clamp-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
              ref={descriptionRef}
            >
              {description}
            </motion.p>
          ) : null}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default WhyUsServiceCard;
