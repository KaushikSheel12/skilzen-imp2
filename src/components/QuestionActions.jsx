import React from "react";

export const QuestionActions = ({
  handleClearResponse,
  currentPage,
  handlePrevPage,
  totalPages,
  handleNextPage,
  MarkForReview,
}) => {
  return (
    <div className="flex gap-5 w-full   md:w-[60%] h-auto md:justify-center justify-between mx-auto mt-[175px] fixed pr-14 md:pr-0">
      <button
        className="bg-white-500 text-black border border-[black] rounded-md px-3 py-2 h-auto w-44 hover:bg-black hover:text-white hidden md:block whitespace-nowrap"
        onClick={handleClearResponse}
        disabled={currentPage === 1}
      >
        Clear Response
      </button>

      <button
        className="bg-white-500 text-black border border-[black] rounded-md px-3 py-2 hover:bg-black hover:text-white md:hidden w-full"
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      
      <button
        className="bg-white-500 text-black border border-[black] rounded-md px-3 py-2 hover:bg-black hover:text-white hidden md:block whitespace-nowrap"
        onClick={MarkForReview}
        disabled={currentPage === 1}
      >
        Mark for Review later
      </button>

      <button
        className="bg-[#2FD5C8] hover:bg-black text-black hover:text-white  rounded-md px-3 py-2 h-auto md:w-48  w-full"
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};
