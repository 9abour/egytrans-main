import { ShowNewsEnum } from '@/enums/news.enums';
import LanguageAwareService from '@/helpers/languageAwareService';
import { NewsResponseType } from '@/types/news.types';
import api from '@/utils/api';

const BASE_ENDPOINT = '/api/news';

/**
 * Builds filter parameters based on the ShowNewsEnum
 * @param filters The filter type
 * @returns Object with filter parameters
 */
function buildFilters(filters?: ShowNewsEnum): Record<string, boolean> {
  const filterMap: Record<ShowNewsEnum, Record<string, boolean>> = {
    [ShowNewsEnum.SHOW_ON_HOME]: { ['filters[Show_on_home][$eq]']: true },
    [ShowNewsEnum.TOP_HEADLINE]: { ['filters[Top_headline][$eq]']: true },
    [ShowNewsEnum.ALL]: {},
  };

  return filters ? filterMap[filters] ?? {} : {};
}

/**
 * Generate date filter string if the input is a valid year
 * @param yearString The year string to validate and convert to date range
 * @returns The generated date filter string or empty string if invalid
 */
function generateDateFilter(yearString: string): string {
  const year = Number(yearString);
  if (isNaN(year) || year < 1970 || year > 2100) return '';

  const startDate = new Date(year, 0, 1).toISOString();
  const endDate = new Date(year, 11, 31, 23, 59, 59).toISOString();

  return `&filters[createdAt][$lte]=${endDate}&filters[createdAt][$gte]=${startDate}`;
}

/**
 * Constructs the query parameters string for the API request
 */
function buildQueryParams(
  filters?: ShowNewsEnum,
  search?: string,
  lang?: string
): string {
  const filterParams = buildFilters(filters);
  const paramsString = new URLSearchParams(
    Object.fromEntries(
      Object.entries(filterParams).map(([key, value]) => [
        key,
        value.toString(),
      ])
    )
  ).toString();

  const dateFilter = search ? generateDateFilter(search) : '';
  const searchFilter =
    search && !dateFilter ? `&filters[Title][$contains]=${search}` : '';

  return [
    'populate=*',
    paramsString && `&${paramsString}`,
    dateFilter,
    searchFilter,
    lang && `&${LanguageAwareService.getLanguageParam(lang)}`,
  ]
    .filter(Boolean)
    .join('');
}

export const getNews = async (
  filters?: ShowNewsEnum,
  search?: string,
  lang?: string
): Promise<NewsResponseType[]> => {
  const queryParams = buildQueryParams(filters, search, lang);
  const endpoint = `${BASE_ENDPOINT}?${queryParams}`;

  const res = await api.get<{ data: NewsResponseType[] }>(endpoint);

  return res.data.data;
};

export const getNewsById = async (
  id: string,
  lang?: string
): Promise<{ data: NewsResponseType }> => {
  const res = await api.get<{ data: NewsResponseType }>(
    `/api/news/${id}?${LanguageAwareService.getLanguageParam(lang)}&populate=*`
  );
  return res.data;
};
