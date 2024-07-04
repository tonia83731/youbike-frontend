import { FaSearch } from "react-icons/fa";

const StopSearch = () => {
  return (
    <div className="md:col-start-3 flex gap-2 w-full">
      <div className="relative w-4/5 md:w-4/6">
        <input
          type="text"
          className="w-full h-10 leading-10 px-4 rounded-md bg-green-light text-green-dark placeholder:text-green-dark-40"
          placeholder="搜尋站點"
        />
        <button className="absolute right-4 top-1/2 -translate-y-1/2 text-green-dark">
          <FaSearch />
        </button>
      </div>
      <button className="w-1/5 md:w-2/6 bg-green-normal px-2 rounded-md text-light hover:drop-shadow-md hover:text-green-dark">
        <div className="">目前位置</div>
      </button>
    </div>
  );
};

export default StopSearch;
