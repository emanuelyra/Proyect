import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByContinent,
  getCountriesByA,
  orderByName,
  orderByPopulation,
  setCountries,
} from "../../Redux/actions";

import style from "./Filters.module.css";

const Filtros = ({ setCurrentPage }) => {
  const actividades = useSelector((state) => state.activities);
  const dispatch = useDispatch();

  const manejarOrdenNombre = (e) => {
    dispatch(orderByName(e.target.value));
  };

 

  const manejarOrdenPoblacion = (e) => {
    dispatch(orderByPopulation(e.target.value));
  };

  const manejarFiltroContinente = (e) => {
    setCurrentPage(1);
    dispatch(filterByContinent(e.target.value));
  };

  const manejarFiltroActividad = (e) => {
    if (e.target.value !== "0") {
      setCurrentPage(1);
      dispatch(getCountriesByA(e.target.value));
    } else {
      setCurrentPage(1);
      dispatch(setCountries());
    }
  };

  const manejarRestablecerFiltros = () => {
    setCurrentPage(1);
    dispatch(setCountries());
  };

  return (
    <div className={style.filters}>
      <div className={style.orderFilter}>
        <h4>Ordenar por Alfabeto</h4>
        <select name="nameOrder" defaultValue="" onChange={manejarOrdenNombre}>
          <option value="" disabled hidden>
            --Seleccionar--
          </option>
          <option value="A">A-Z</option>
          <option value="D">Z-A</option>
        </select>
      </div>
      <div className={style.orderFilter}>
        <h4>Ordenar por Población</h4>
        <select
          name="populationOrder"
          defaultValue=""
          onChange={manejarOrdenPoblacion}
        >
          <option value="" disabled hidden>
            --Seleccionar--
          </option>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
      </div>
      <div className={style.orderFilter}>
        <h4>Filtrar por Continente</h4>
        <select name="continentFilter" onChange={manejarFiltroContinente}>
          <option value="" disabled hidden>
            --Seleccionar--
          </option>
          <option value="All countries">Todos los países</option>
          <option value="Africa">África</option>
          <option value="Europe">Europa</option>
          <option value="Asia">Asia</option>
          <option value="North America">América del Norte</option>
          <option value="South America">América del Sur</option>
          <option value="Oceania">Oceanía</option>
          <option value="Antarctica">Antártida</option>
        </select>
      </div>
      <div className={style.orderFilter}>
        <h4>Filtrar por Actividad</h4>
        <select name="activityFilter" onChange={manejarFiltroActividad}>
          <option key="0" value="0">
            Todos los países
          </option>
          {actividades?.map((actividad) => (
            <option key={actividad.id} value={actividad.id}>
              {actividad.name}
            </option>
          ))}
        </select>
      </div>
      <button className={style.resetButton} onClick={manejarRestablecerFiltros}>
        Restablecer Filtros
      </button>
    </div>
  );
};

export default Filtros;
