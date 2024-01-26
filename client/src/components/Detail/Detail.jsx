import style from "./Detail.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [countryDetail, setcountryDetail] = useState([]);

  useEffect(() => {
    axios(`http://localhost:3001/countries/${id}`).then(({ data }) => {
      data.name ? setcountryDetail(data) : window.alert("no se enconro el pais");
    });
  }, [id]);

  const {
    name,
    image,
    continent,
    capital,
    subregion,
    area,
    population,
    Activities,
  } = countryDetail;
  console.log(countryDetail);
  const formattedArea = Number(area).toLocaleString("es-ES");
  const formattedPopulation = Number(population).toLocaleString("es-ES");

  return (
    <div>
      <div className={style.navegacion}>
        <img src={image && image} alt="" />
        <h1> {name && name}</h1>

        <Link to={"/home"}>
          <button>HOME</button>
        </Link>
      </div>

      <div className={style.contenedor}>
        <div className={style.izquierda}>
          <h3> Id | {id && id}</h3>
          <h3> Continent | {continent && continent}</h3>
          <h3> Capital | {capital && capital}</h3>
          <h3> Subregion | {subregion && subregion}</h3>
          <h3 className={style.number}>
            {" "}
            Area | {area && formattedArea} km <sup>2</sup>{" "}
          </h3>
          <h3> Population | {population && formattedPopulation} people</h3>
          </div>
          <div className={style.activities}>          
          <h3>
            Activities |{" "}
            {Activities &&
              Activities.map((a) => (
                <div key={a.id}>
                  <h2>Name: {a.name}</h2>
                  <h3>Duration: {a.duration}</h3>
                  <h3>Difficulty: {a.difficulty}</h3>
                  <h3>Season: {a.season}</h3>
                </div>
              ))}
          </h3>
        </div>

        <div className={style.derecha}>
          <img src={image && image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Detail;
