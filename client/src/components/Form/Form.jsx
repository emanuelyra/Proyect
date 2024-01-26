import style from "./Form.module.css";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActivities, postActivity } from "../../Redux/actions";
import validate from "../../Functions/validation";
import { Link, useNavigate } from "react-router-dom";

const Formulario = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const paises = useSelector((state) => state.allCountries);
  const paisesOrdenados = paises?.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  const [actividad, setActividad] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countryId: [],
  });

  const formularioReset = useRef(null);
  const [error, setError] = useState({});

  const manejarCambio = (event) => {
    setActividad({
      ...actividad,
      [event.target.name]: event.target.value,
    });
    setError(
      validate({ ...actividad, [event.target.name]: event.target.value })
    );
  };

  const manejarCambioPaises = (event) => {
    const paisesSeleccionados = Array.from(
      event.target.selectedOptions,
      (opcion) => opcion.value
    );
    setActividad({
      ...actividad,
      countryId: [...actividad.countryId, ...paisesSeleccionados],
    });
  };

  const manejarEnvio = (event) => {
    event.preventDefault();

    dispatch(postActivity(actividad));

    setActividad({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      countryId: [],
    });

    formularioReset.current.reset();

    window.alert("Actividad creada");
    navigate("/home");
    dispatch(getActivities());
  };

  const actualizar = () => {
    dispatch(getActivities());
  };

  return (
    <div className={style.principal}>
      <Link to={"/home"}>
        <button onClick={actualizar}>HOME</button>
      </Link>

      <h2>Crear Actividad</h2>
      <form className={style.form} onSubmit={manejarEnvio} ref={formularioReset}>
        <div className={style.fieldset}>
          <div className={style.inputs}>
            <label id="name">Nombre</label>
            <input
              type="text"
              name="name"
              placeholder="Nombre..."
              onChange={manejarCambio}
              value={actividad.name}
            />
            {error.name && <p className={style.error}>{error.name}</p>}
          </div>

          <div className={style.inputs}>
            <label id="difficulty">Dificultad</label>
            <select defaultValue="" onClick={manejarCambio} name="difficulty">
              <option value="" disabled hidden>
                {" "}
                --Seleccionar--{" "}
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <div className={style.inputs}>
            <label id="duration">Duración</label>
            <input
              type="text"
              name="duration"
              placeholder="Horas..."
              onChange={manejarCambio}
            />
            {error.duration && <p className={style.error}>{error.duration}</p>}
          </div>

          <div className={style.inputs}>
            <label id="season">Temporada</label>
            <select defaultValue="" onChange={manejarCambio} name="season">
              <option value="" disabled hidden>
                --Seleccionar--
              </option>
              <option value="Summer">Verano</option>
              <option value="Autumn">Otoño</option>
              <option value="Winter">Invierno</option>
              <option value="Spring">Primavera</option>
            </select>
          </div>

          <div className={style.inputs}>
            <label id="countryId">Países</label>
            <select onChange={manejarCambioPaises} name="countryId" multiple>
              {paisesOrdenados?.map(({ id, name }) => {
                return (
                  <option key={id} value={id}>
                    {name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className={style.countries_selected}>
            <label id="countriesSelected">Países seleccionados:</label>
            {actividad.countryId.length > 0 ? (
              <p>
                {paisesOrdenados.map((pais) => {
                  if (actividad.countryId.includes(pais.id)) {
                    return <span key={pais.id}> - {pais.name}</span>;
                  }
                })}
              </p>
            ) : (
              <p>No hay países seleccionados</p>
            )}
          </div>
        </div>
        <button
          disabled={
            actividad.season &&
            actividad.difficulty &&
            !error.name &&
            !error.duration &&
            actividad.countryId.length
              ? false
              : true
          }
          className={
            actividad.season &&
            actividad.difficulty &&
            !error.name &&
            !error.duration &&
            actividad.countryId.length
              ? ""
              : style.disable
          }
        >
         Crear
        </button>
        <p className={style.error}>
          {!actividad.name ||
          !actividad.season ||
          !actividad.difficulty ||
          !actividad.countryId.length
            ? "* Todos los campos deben completarse"
            : ""}
        </p>
      </form>
    </div>
  );
};

export default Formulario;
