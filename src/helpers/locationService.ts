import locationsData from '../countries/countries.json';

export const getAllCountries = () => {
  return locationsData.countries.map((country) => ({
    name: country.name,
    code: country.code,
  }));
};

export const getStatesByCountry = (countryCode: string) => {
  const country = locationsData.countries.find((c) => c.code === countryCode);
  return country
    ? country.states.map((state) => ({
        name: state.name,
        code: state.code,
      }))
    : [];
};

export const getCitiesByState = (countryCode: string, stateCode: string) => {
  const country = locationsData.countries.find((c) => c.code === countryCode);
  if (!country) return [];

  const state = country.states.find((s) => s.code === stateCode);
  return state ? state.cities : [];
};
