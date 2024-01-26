const { Activity } = require("../db");
const getActivities = async (req, res) => {
  try {
    const allActivities = await Activity.findAll();
    return res.status(200).json(allActivities);
  } catch (error) {
    res.status(500).json({ error: "Error en la coneccion con la data base" });
  }
};

module.exports = getActivities;
