import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type PaginationProps = {
  pages: number[];
  pageLength: number;
  currPage: number;
  onArrowClick: (btn: string) => void;
  onNumClick: (page: number) => void;
};

const Pagination = (props: PaginationProps) => {
  const { pages, pageLength, currPage, onArrowClick, onNumClick } = props;
  return (
    <nav
      className="isolate inline-flex -space-x-px rounded-md shadow-sm"
      aria-label="Pagination"
    >
      <button
        onClick={() => onArrowClick("prev")}
        disabled={currPage === 1}
        className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-300 ring-1 ring-inset ring-gray-300 hover:bg-gray-300 hover:text-white focus:z-20 focus:outline-offset-0 disabled:hover:bg-transparent disabled:hover:text-gray-300"
      >
        <IoIosArrowBack />
      </button>
      {pages.map((page) => {
        return (
          <button
            key={`page-${page}`}
            onClick={() => onNumClick(page)}
            className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 ${
              currPage === page
                ? "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-1 bg-green-normal text-white z-10"
                : "focus:outline-offset-0 text-green-dark ring-1 ring-inset ring-gray-300 hover:bg-gray-300 hover:text-white"
            }`}
          >
            {page}
          </button>
        );
      })}
      <button
        onClick={() => onArrowClick("next")}
        disabled={currPage === pageLength}
        className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-300 ring-1 ring-inset ring-gray-3 hover:bg-gray-300 hover:text-white focus:z-20 focus:outline-offset-0 disabled:hover:bg-transparent disabled:hover:text-gray-300"
      >
        <IoIosArrowForward />
      </button>
    </nav>
  );
};

export default Pagination;
