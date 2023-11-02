import React, { useState } from "react";
import "./style.css";
import Table from "./Table";
import { FOODS } from "./data";

function Pagination() {
  const ITEMS_PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedData = FOODS.slice(startIndex, endIndex);

  return (
    <div className="pagination_container">
      <Table
        data={paginatedData}
        currentPage={currentPage}
        totalPages={Math.ceil(FOODS.length / ITEMS_PER_PAGE)}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default Pagination;
