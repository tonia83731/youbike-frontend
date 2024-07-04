import { twCityDistricts } from "./twCityDistricts";

export const getDistrictsOptions = (selectcity: string) => {
  // console.log(selectcity);
  const findDistricts = twCityDistricts.filter((item) => {
    // console.log(`Comparing ${item.city} with ${selectcity}`);
    return item.city === selectcity;
  });
  // console.log(findDistricts);
  const districts = findDistricts[0].districts;
  // const data = districts?.map((item) => {
  //   return item.name;
  // });
  return districts;
};
