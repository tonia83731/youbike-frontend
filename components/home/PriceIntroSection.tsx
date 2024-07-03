const PriceIntroSection = () => {
  return (
    <div className="md:grid md:grid-cols-2 md:gap-4">
      <div className="bg-green-light text-green-dark p-6 drop-shadow-md">
        <h4 className="font-bold text-2xl mb-4 text-dark">收費方式</h4>
        <div className="font-bold text-green-dark text-center">
          <h5 className="text-lg">4小時內30分鐘</h5>
          <h1 className="text-6xl my-6">10 元</h1>
          <div className="text-dark font-light">
            <p>4~8 小時內每 30 分鐘 20 元</p>
            <p>超過 8 小時每 30 分鐘 40 元</p>
            <p>未滿 30 分鐘以 30 分鐘計算</p>
          </div>
        </div>
      </div>
      <div className="bg-green-dark text-light p-6 drop-shadow-md hidden md:flex md:justify-center md:items-end">
        <div>
          <div className="text-xl mb-4">注意:</div>
          <ul className="list-decimal list-inside text-xs">
            <li className="">票卡租車，會員票卡餘額需≧0元，方能租借。</li>
            <li className="">
              騎乘補助：2024年2月28日起，會員騎乘臺北市YouBike 2.0
              前30分鐘免費由臺北市政府補助，補助截止日期依臺北市政府交通局公告。
            </li>
            <li className="">
              適用優惠：
              TPASS行政院通勤月票-基北北桃1200都會通、敬老卡、愛心卡優惠。
            </li>
            <li className="">
              道路救援：民眾騎乘臺北市YouBike，若需道路救援，臺北市境內將酌收新臺幣150元整。若超出前述範圍，需請民眾自行將車輛送回區域內，或由本公司視救援範圍及時程，加收調度費用。
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PriceIntroSection;
