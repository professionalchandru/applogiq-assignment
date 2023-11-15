/* eslint-disable react/prop-types */
import UsePagination, { DOTS } from "../../Hooks/UsePagination";

import arrowLeft from "../../Assets/svg/arrow-left.svg";
import arrowRight from "../../Assets/svg/arrow-right.svg";

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize = 10,
}) => {
  const paginationRange = UsePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <>
      <div className="px-6 pt-3 pb-4 flex flex-row items-center justify-between bg-white rounded-b-lg  table-footer-shadow ">
        <button
          onClick={onPrevious}
          className={`px-4 py-2.5 flex items-center gap-x-2 border border-borderPrimary rounded-lg text-primary text-sm bg-white add-new-button-shadow ${
            currentPage === 1 ? "cursor-not-allowed" : "cursor-pointer"
          }`}
          disabled={currentPage === 1}
        >
          <img src={arrowLeft} alt="Plus-icon.svg" />
          <span className="text-sm text-primary font-normal">Previous</span>
        </button>

        <div className="flex flex-row gap-x-0.5">
          {paginationRange?.map((pageNumber, index) => {
            if (pageNumber === DOTS) {
              return (
                <div
                  className="p-3 text-sm font-medium text-[#667085]"
                  key={index}
                >
                  &#8230;
                </div>
              );
            }

            return (
              <div
                key={index}
                className={`${
                  pageNumber === currentPage &&
                  "bg-[#7F56D9] rounded-lg bg-opacity-10"
                } p-3 px-4 text-sm font-medium text-[#667085] cursor-pointer `}
                onClick={() => onPageChange(pageNumber)}
              >
                {pageNumber}
              </div>
            );
          })}
        </div>

        <button
          onClick={onNext}
          className={`px-4 py-2.5 flex items-center gap-x-2 border border-borderPrimary rounded-lg text-primary text-sm bg-white add-new-button-shadow ${
            currentPage === lastPage ? "cursor-not-allowed" : "cursor-pointer"
          }`}
          disabled={currentPage === lastPage}
        >
          <span className="text-sm text-primary font-normal">Next</span>
          <img src={arrowRight} alt="Plus-icon.svg" />
        </button>
      </div>
    </>
  );
};

export default Pagination;
