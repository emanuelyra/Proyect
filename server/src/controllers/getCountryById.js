const { Country, Activity } = require("../db");
const getCountryById = async (req, res) => {
  try {
    const { idPais } = req.params;
    const CountryFound = await Country.findOne({
      where: { id: idPais },
      include: [Activity],
    });
    if (CountryFound) return res.status(200).json(CountryFound);
    else throw Error;
  } catch (error) {
    res.status(404).json({ error: "ID No encontrado" });
  }
};

module.exports = getCountryById;
