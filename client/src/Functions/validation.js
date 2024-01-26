const validate = (actividad) => {
  const errores = {};

  if (!/\b\w{3,30}\b/.test(actividad.name)) {
    errores.name = "* Debe tener entre 3 y 30 caracteres ";
  }

  if (!/^-?\d+(\.\d+)?$/.test(actividad.duration) || actividad.duration <= 0) {
    errores.duration = "*   Debe tener Duración    ";
  }

  if (actividad.duration > 9) {
    errores.duration = "* La duración máxima es de 9 horas";
  }

  return errores;
};

export default validate;
