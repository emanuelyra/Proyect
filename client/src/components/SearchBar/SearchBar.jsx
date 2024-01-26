// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { getCountriesByName } from "../../Redux/actions";
// import style from "./SearchBar.module.css";

// const SearchBar = () => {
//   const dispatch = useDispatch();
//   const [countrySearch, setCountrySearch] = useState("");

//   const handleChange = (event) => {
//     setCountrySearch(event.target.value);
//   };

//   const handleSearch = () => {
  
//     const lowercaseSearch = countrySearch.toLowerCase();
//     dispatch(getCountriesByName(lowercaseSearch));
//   };

//   return (
//     <div className={style.searchBar}>
//       <input
//         className={style.input}
//         name="search"
//         type="search"
//         placeholder="..."
//         onChange={handleChange}
//       />
//       <button className={style.searchButton} onClick={handleSearch}>
//         Buscar
//       </button>
//     </div>
//   );
// };
// export default SearchBar;

// searchBar.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountriesByName } from "../../Redux/actions";
import style from "./SearchBar.module.css";


const SearchBar = () => {
  const dispatch = useDispatch();
  const [countrySearch, setCountrySearch] = useState("");

  const handleChange = (event) => {
    setCountrySearch(event.target.value);
  };

  const handleSearch = () => {
    dispatch(getCountriesByName(countrySearch));
  };

  return (
    <div className={style.searchBar}>
      <input
        className={style.input}
        name="search"
        type="search"
        placeholder=" countries..."
        onChange={handleChange}
      />
      <button className={style.searchButton} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;