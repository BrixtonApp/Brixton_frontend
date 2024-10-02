import React from "react";

const Pagination = ({ roomsPerPage, totalRooms, currentPage, paginate }) => {
  const pageNumbers = [];

  // Calculate the number of pages
  for (let i = 1; i <= Math.ceil(totalRooms / roomsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-nav flex justify-center mt-4 ">
      <div className="btn-group">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`btn ${
              currentPage === number
                ? "btn-active bg-customOrange border-none text-white hover:bg-orange-700"
                : ""
            }`}
          >
            {number}
          </button>
        ))}
      </div>

      {/* Alternative with radio button pagination using DaisyUI join class */}
      {/* Uncomment if you'd prefer this style
      <div className="join mt-4">
        {pageNumbers.map((number) => (
          <input
            key={number}
            type="radio"
            name="pagination"
            aria-label={number}
            className={`join-item btn btn-square ${
              currentPage === number ? "checked" : ""
            }`}
            onClick={() => paginate(number)}
          />
        ))}
      </div>
      */}
    </div>
  );
};

export default Pagination;
