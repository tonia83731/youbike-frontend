import { twCityDistricts } from "./twCityDistricts";

export const twCity = () => {
  const data = twCityDistricts.map((item) => {
    return {
      value: item.city,
      label: item.city,
    };
  });
  return data;
};
