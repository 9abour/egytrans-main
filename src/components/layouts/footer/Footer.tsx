import FooterClient from '@/components/layouts/footer/FooterClient';
import { getAddress } from '@/services/address.api';
import { getFooter } from '@/services/footer.api';

const Footer = async ({ locale }: { locale: string }) => {
  const [footerData, addresses] = await Promise.all([
    getFooter(locale),
    getAddress(locale),
  ]);

  return <FooterClient initialData={footerData?.data} addresses={addresses} />;
};

export default Footer;
