const { Country, Activity } = require('../db');
const { Op } = require('sequelize');
const axios = require ('axios');

const getAllCountries = async () => {

    const dbCountries = await Country.findAll();

    if ( dbCountries.length === 0 ) {
        const countryApi = await axios.get('http://localhost:5000/countries');

        const infoApi = countryApi.data.map((country) => ({
          id: country.cca3,
          name: country.name.common,
          image: country.flags.svg,
          continent: country.continents[0],
          capital: country.capital ? country.capital[0] : 'Not Found',
          subregion: country.subregion || 'Not Found',
          area: country.area,
          population: country.population,  
        }));

       infoApi.forEach(element => {
       const capi = element.capital.normalize("NFD").replace(/[\u0300-\u036f]/g, "") 
       element.capital = capi; 
       });

       await Country.bulkCreate(infoApi, {ignoreDuplicates: true });
    }

    const dbCountry = await Country.findAll(
        {
        include:{
            model: Activity,
            attributes: ["name", "difficulty", "duration", "season"],
            through: {
                attributes: []
            }
        }
    }
   );
    return dbCountry;
};

const getCountryByName = async (name) => {

    const countryFiltered = await Country.findAll({
        where:
        { name:
        {[Op.iLike]:
        `%${name}%`
    }}})

    return countryFiltered;

};

const getCountryById = async (id) => {

    const countryFilter = await Country.findAll(
        {
        where: {id},
        include: {
            model: Activity,
            attributes: ["name", "difficulty", "duration", "season"],
            through: {
                attributes: []
            }
        }
     })
    return countryFilter;
};

module.exports = {
    getAllCountries,
    getCountryByName,
    getCountryById
};