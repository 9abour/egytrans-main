import ButtonText from '@/components/common/ButtonText';
import { Input } from '@/components/common/Input';
import { useCurrentLanguage } from '@/hooks/useCurrentLanguage';
import { cn } from '@/lib/utils';
import { useNewsSearchSlice } from '@/store/newsSearchSlice';
import { Search, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

const SearchForm = () => {
  const t = useTranslations();
  const locale = useCurrentLanguage();
  const [searchValue, setSearchValue] = useState('');
  const { setSearch } = useNewsSearchSlice();

  const handleSearch = () => {
    setSearch(searchValue);
  };

  const handleClear = () => {
    setSearchValue('');
    setSearch('');
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
      }}
      className="w-full md:w-fit relative flex gap-2 mt-4 md:mt-0"
    >
      <span
        className={cn(
          'absolute w-[20px] top-1/2 -translate-y-1/2 flex-jc-c text-[#808080] z-10',
          locale === 'ar' ? 'right-2' : 'left-2'
        )}
      >
        <Search size={20} />
      </span>

      <div className="relative w-full">
        <Input
          name="search"
          placeholder={t('searchNewsPlaceholder')}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          className="md:w-[439px] h-[38px] px-[32px] placeholder:font-normal placeholder:text-[14px] placeholder:leading-[140%] placeholder:tracking-normal"
        />

        {searchValue && (
          <button
            type="button"
            onClick={handleClear}
            className={cn(
              'absolute w-[20px] top-1/2 right-4 -translate-y-1/2 flex-jc-c text-[#808080]',
              locale === 'ar' && 'left-4 right-auto'
            )}
          >
            <X />
          </button>
        )}
      </div>

      <ButtonText text={t('search')} className="w-[89px] h-[38px]" />
    </form>
  );
};

export default SearchForm;
