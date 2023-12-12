import React from "react";

const ProgressBar = ({ progress, currentPage, totalPages }) => {
  return (
    <div id="prog " className="border  border-gray-300 rounded-md">
      <div>
        <div
          id="progress-line"
          style={{
            width: `${progress}%`,
            height: "7px",
            background: "rgb(38, 133, 243)",
            transition: "width 0.2s",
            borderRadius: "7px",
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
