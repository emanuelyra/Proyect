import React from 'react';
import style from './Home.module.css';
import NavBar from '../NavBar/NavBar';
import Countries from '../Countries/Countries';
import Pagination from '../Pagination/Pagination';
import Filters from '../Filters/Filters';
import { useState } from 'react';

const Home = ({ countries }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage, setCountriesPerPage] = useState(10);
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={style.home}>
      <NavBar />
      <Filters setCurrentPage={setCurrentPage} />
      <Pagination
        countriesPerPage={countriesPerPage}
        totalCountries={countries.length}  
        paginate={paginate}
        currentPage={currentPage}
      />
      <Countries countries={currentCountries} />
    </div>
  );
};

export default Home;
