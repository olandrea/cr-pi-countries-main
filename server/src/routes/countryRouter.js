const { Router } = require("express");
const { getCountriesHandler, getCountryHandler } = require("../handlers/countryHandlers");

const countriesRouter = Router();

countriesRouter.get("/", getCountriesHandler);
countriesRouter.get("/:id", getCountryHandler);

module.exports = countriesRouter;