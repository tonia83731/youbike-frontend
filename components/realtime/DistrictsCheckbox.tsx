"use client";

import { getDistrictsOptions } from "@/datas/getDistrictsOptions";
import { useCityStore } from "@/store/cityStore";

const DistrictsCheckbox = () => {
  const { selectedCity } = useCityStore();
  //   console.log(selectedCity.label);
  const label = selectedCity.label;
  const districts = getDistrictsOptions(label);
  //   console.log(districts);
  return (
    <>
      <div className="flex gap-2">
        <input type="checkbox" id="all" className="accent-green-light" />
        <label htmlFor="all" className="w-16">
          全部勾選
        </label>
      </div>
      <div className="grid grid-cols-3 gap-4 md:flex md:flex-wrap md:justify-between">
        {districts.map(({ zip, name }, index) => {
          return (
            <div
              className={`flex gap-2 ${
                index % 3 === 1
                  ? "justify-self-center"
                  : index % 3 === 2
                  ? "justify-self-end"
                  : "justify-self-start"
              } `}
              key={zip}
            >
              <input type="checkbox" id={zip} className="accent-green-light" />
              <label htmlFor={zip} className="w-16">
                {name}
              </label>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DistrictsCheckbox;
