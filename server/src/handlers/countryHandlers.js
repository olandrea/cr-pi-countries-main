const { getAllCountries, getCountryByName, getCountryById} = require('../controller/countryController');

const getCountriesHandler = async (req,res) => {
    
    const { name } = req.query;
    
    try {
        if ( name ) {
            const countryName = await getCountryByName(name);
            if ( !countryName.length ) {
                throw Error(`${name} no representa a ningún país.`);
            }else {
                return res.status(200).json(countryName);
            }
        }else {
            const allCountries = await getAllCountries();
          
            return res.status(200).json(allCountries);
        }
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

const getCountryHandler = async (req,res) => {
   
    const { id } = req.params;
    
    try {
        if ( id ) {
            const countryId = await getCountryById(id);
            if ( !countryId.length) throw Error(`El pais ${id} no existe.`);
            else return res.status(200).json(countryId);
        } 
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

module.exports = {
    getCountriesHandler,
    getCountryHandler,
};