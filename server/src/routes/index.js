const { Router } = require("express");

const getAllCountries = require("../controllers/getAllCountries");
const getCountryById = require("../controllers/getCountryById");
const getCountriesByName = require("../controllers/getCountriesByName");
const postActivity = require("../controllers/postActivity");
const getActivities = require("../controllers/getAtivities");
const getCountriesByActivity = require("../controllers/getCountriesByAct");

const router = Router();

router.get("/countries", getAllCountries);
router.get("/countries/name", getCountriesByName);
router.get("/countries/:idPais", getCountryById);
router.post("/activities", postActivity);
router.get("/activities", getActivities);
router.get("/countries-by-activities/:id", getCountriesByActivity);



module.exports = router;
