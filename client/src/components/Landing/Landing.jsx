import React from "react";
import { Link } from "react-router-dom";
import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={styles.divOpen}>
      <div className={styles.divContent}>
        <h1 className={styles.title}>Bienvenido a mi Página Inicial</h1>
        <p className={styles.subtitle}>¡Hola! Este es mi proyecto  Soy Emanuel Yrala.</p>
        <div className={styles.divButton}>
          <Link className={styles.link} to="/home">
            <button className={styles.button}>Ir a la Página Principal</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
