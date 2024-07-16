import { create } from "zustand";
type CityProps = {
  value: string;
  label: string;
};
interface CityState {
  selectedCity: CityProps;
  setSelectedCity: (city: CityProps) => void;
  cityOptions: CityProps[];
  setCityOptions: (options: CityProps[]) => void;
}
export const useCityStore = create<CityState>((set) => ({
  selectedCity: { value: "Taipei", label: "臺北市" },
  setSelectedCity: (city) => set({ selectedCity: city }),
  cityOptions: [
    { value: "Taipei", label: "臺北市" },
    { value: "NewTaipei", label: "新北市" },
    { value: "Taoyuan", label: "桃園市" },
    { value: "Hsinchu", label: "新竹市" },
    { value: "HsinchuCounty", label: "新竹縣" },
    { value: "MiaoliCounty", label: "苗栗縣" },
    { value: "Taichung", label: "臺中市" },
    { value: "Chiayi", label: "嘉義市" },
    { value: "Tainan", label: "臺南市" },
    { value: "Kaohsiung", label: "高雄市" },
    { value: "PingtungCounty", label: "屏東縣" },
  ],
  setCityOptions: (option: any) => set({ cityOptions: option }),
}));
