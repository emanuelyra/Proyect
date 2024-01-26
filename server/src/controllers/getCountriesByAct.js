const { Country, Activity } = require("../db");
const getCountriesByActivity = async (req, res) => {
  console.log(req.params)

  try {
    const { id } = req.params;
    const activity = await Activity.findByPk(id, {
      include: [
        {
          model: Country,
          through: "country_activity",
        },
      ],
    });

    if (!activity) {
      return res.status(404).json({ error: "Activity no encontrada" });
    }

    const countries = activity.Countries;
    return res.status(200).json(countries);
  } catch (error) {
    res.status(500).json({ error: "Error interno en  el  server" });
  }
};

module.exports = getCountriesByActivity;
