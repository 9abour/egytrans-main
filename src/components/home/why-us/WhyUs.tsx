import WhyUsClient from '@/components/home/why-us/WhyUsClient';
import { WhyUsResponseType } from '@/types/why-us.types';

const WhyUs = async ({
  currentLanguage,
  initialData,
}: {
  currentLanguage: string;
  initialData: WhyUsResponseType[];
}) => {
  return (
    <WhyUsClient currentLanguage={currentLanguage} initialData={initialData} />
  );
};

export default WhyUs;
