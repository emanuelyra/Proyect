const { Country, Activity } = require("../db");
const { Op } = require("sequelize");
const getCountriesByName = async (req, res) => {
  const { name } = req.query;
  try {
    console.log(name);

    const countriesFound = await Country.findAll({
      where: {
        name: { [Op.iLike]: `%${name}%` },
      },
    });

    return res.status(200).json(countriesFound);
  } catch (error) {
    res.status(404).json({ error: `No se encuentra el pais ${name}` });
  }
};

module.exports = getCountriesByName;