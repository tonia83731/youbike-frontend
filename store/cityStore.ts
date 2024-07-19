import { create } from "zustand";
import { twCityWithLatLng } from "@/datas/twCityWithLatLng";
type CityProps = {
  value: string;
  label: string;
};
interface CityState {
  selectedCity: CityProps;
  centerPosition: [number, number] | undefined;
  zoom: number;
  MarkerTag: string;
  setSelectedCity: (city: CityProps) => void;
  cityOptions: CityProps[];
  setCityOptions: (options: CityProps[]) => void;
  setNewPosition: (position: [number, number]) => void;
  setNewTag: (tag: string) => void;
}
export const useCityStore = create<CityState>((set) => ({
  selectedCity: { value: "Taipei", label: "臺北市" },
  centerPosition: [25.033, 121.5654],
  zoom: 13,
  MarkerTag: "臺北市中心",
  setSelectedCity: (city) =>
    set((state) => {
      const initialPosition = twCityWithLatLng.find(
        (item) => item.value === city.value
      )?.position;
      const centerPosition: [number, number] | undefined = initialPosition && [
        initialPosition.latitude,
        initialPosition.longitude,
      ];
      return {
        selectedCity: city,
        centerPosition,
        zoom: 13,
        MarkerTag: city.label + "中心",
      };
    }),
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
  setNewPosition: (position: [number, number]) =>
    set({
      centerPosition: position,
      zoom: 20,
    }),
  setNewTag: (tag: string) =>
    set({
      MarkerTag: tag,
    }),
}));
