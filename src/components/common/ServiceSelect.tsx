import SelectWithLabel from '@/components/common/SelectWithLabel';
import { SelectItem } from '@/components/ui/select';
import { useCurrentLanguage } from '@/hooks/useCurrentLanguage';
import { getServiceTypes } from '@/services/services.api';
import { useQuery } from '@tanstack/react-query';
import { useTranslations } from 'next-intl';

const ServiceSelect = ({
  handleSelectChange,
}: {
  handleSelectChange: (value: string) => void;
}) => {
  const t = useTranslations();
  const currentLang = useCurrentLanguage();

  const { data: serviceTypes } = useQuery({
    queryKey: ['serviceTypes'],
    queryFn: () => getServiceTypes(currentLang),
  });

  return (
    <SelectWithLabel
      label={t('serviceType')}
      placeholder={t('select')}
      required
      onChange={(value) => handleSelectChange(value)}
    >
      {serviceTypes?.length ? (
        serviceTypes?.map((serviceType) => (
          <SelectItem key={serviceType.id} value={serviceType.documentId}>
            {serviceType.Name}
          </SelectItem>
        ))
      ) : (
        <p className="text-center py-2">{t('noResults')}</p>
      )}
    </SelectWithLabel>
  );
};

export default ServiceSelect;
