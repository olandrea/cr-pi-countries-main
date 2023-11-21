const { Router } = require("express");
const { getCountriesHandler, getCountryHandler } = require("../handlers/countryHandlers");

const countriesRouter = Router();

countriesRouter.get("/:id", getCountryHandler);
countriesRouter.get("/", getCountriesHandler);

module.exports = countriesRouter;