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
    { value: "Taichung", label: "臺中市" },
    { value: "Tainan", label: "臺南市" },
    { value: "Kaohsiung", label: "高雄市" },
    { value: "Keelung", label: "基隆市" },
    { value: "Hsinchu", label: "新竹市" },
    { value: "HsinchuCounty", label: "新竹縣" },
    { value: "MiaoliCounty", label: "苗栗縣" },
    { value: "ChanghuaCounty", label: "彰化縣" },
    { value: "NantouCounty", label: "南投縣" },
    { value: "YunlinCounty", label: "雲林縣" },
    { value: "ChiayiCity", label: "嘉義市" },
    { value: "ChiayiCounty", label: "嘉義縣" },
    { value: "PingtungCounty", label: "屏東縣" },
    { value: "YilanCounty", label: "宜蘭縣" },
    { value: "HualienCounty", label: "花蓮縣" },
    { value: "TaitungCounty", label: "臺東縣" },
    { value: "PenghuCounty", label: "澎湖縣" },
    { value: "KinmenCounty", label: "金門縣" },
    { value: "LienchiangCounty", label: "連江縣" },
  ],
  setCityOptions: (option: any) => set({ cityOptions: option }),
}));
