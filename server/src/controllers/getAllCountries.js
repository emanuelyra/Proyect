const { Country } = require("../db");
const getAllCountries = async (req, res) => {
  try {
    const allCountries = await Country.findAll();
    if (allCountries) return res.status(200).json(allCountries);
    else throw Error;
  } catch (error) {
    res.status(500).json({ error: "Error en  la coneccion con la base de datos" });
  }
};

module.exports = getAllCountries;

