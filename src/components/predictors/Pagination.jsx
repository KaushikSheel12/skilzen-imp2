import React, { useState } from "react";

export const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 10;

  const items = [...Array(40).keys()].map((i) => ({
    id: i,
    name: `Item ${i + 1}`,
  }));

  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  console.log("item Length", items);
  console.log("firstPaege", isFirstPage, "LastPaege", isLastPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIdx = currentPage * ITEMS_PER_PAGE;
  const currentItems = items.slice(startIdx, endIdx);

  const range = (start, end) =>
    Array.from({ length: end - start + 1 }, (_, i) => i + start);

  return (
    <div>
      <div>
        {currentItems.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
      <div>
        <div className="flex  items-center gap-3">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`w-fit h-fit px-3 py-[1px] rounded-md shadow-md ${
              isFirstPage ? "text-black bg-white" : "text-white bg-blue-400"
            }`}
          >
            Previous
          </button>

          {range(1, totalPages).map((page) => {
            // console.log(`currentPage: ${currentPage}, page: ${page}`);

            return (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                disabled={currentPage === page}
                className={`${
                  currentPage === page ? " bg-blue-400 " : " bg-white "
                } w-fit h-fit px-3 py-[1px] rounded-md`}
              >
                {page}
              </button>
            );
          })}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`w-fit h-fit px-3 py-[1px] rounded-md shadow-md ${
              isLastPage ? "text-black bg-white" : "text-white bg-blue-400"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
