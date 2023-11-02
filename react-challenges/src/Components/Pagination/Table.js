import React from "react";
import "./Table.css";
import Page from "./Page";

function Table({ data, currentPage, totalPages, onPageChange }) {
  return (
    <div className="container-for-table">
      <Page
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />

      <table className="table">
        <thead className="thead">
          <tr>
            <th>#</th>
            <th>Food</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
