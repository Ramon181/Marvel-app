"use client";

import { useState } from "react";

import style from "./Pagination.module.css";

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const [pages, setPages] = useState(
    Array.from({ length: totalPages }, (_, i) => i + 1)
  );

  return (
    <div>
      <ul className={style.pagination_container}>
        {pages.map((number) => {
          return (
            <li key={number} className={style.pagination_number}>
              <button
                onClick={() => {
                  onPageChange(number);
                }}
              >
                {number}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
