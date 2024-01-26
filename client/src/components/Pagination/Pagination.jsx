import React from 'react';
import style from './Pagination.module.css';

const Pagination = ({ countriesPerPage, totalCountries, paginate, currentPage }) => {
  const pageNumbers = Array.from({ length: Math.ceil(totalCountries / countriesPerPage) }).map((_, index) => index + 1);

  const handlePrevClick = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < pageNumbers.length) {
      paginate(currentPage + 1);
    }
  };

  return (
    <nav className={style.nav}>
      <ul className={style.ul}>
        <li>
          <button className={style.button} onClick={handlePrevClick}>
            {'<'}
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              className={number === currentPage ? style.activePage : style.button}
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          </li>
        ))}
        <li>
          <button className={style.button} onClick={handleNextClick}>
            {'>'}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
