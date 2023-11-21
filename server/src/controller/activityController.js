const { Activity, Country } = require('../db');
const axios = require ('axios');

const postActivities = async(name, difficulty, duration, season, pais) => {

    const newActivity = await Activity.create({
        name,
        difficulty,
        duration,
        season
      })
       
        const findCountry = await Country.findAll({where: {name: pais}})
    
        await newActivity.addCountries(findCountry)
    
      const activity = await Activity.findAll({include: {
        model: Country,
        attributes: ["name"],
        through: {
          attributes: []
        }
      } })
    
      return activity
};

const getAllActivities = async () => await Activity.findAll({include: {
    model: Country,
    attributes: ["name"],
    through: {
      attributes: []
    }
  }});

const deleteActivities = async(id) =>  await Activity.destroy({where: {id}});

module.exports = {
    postActivities,
    getAllActivities,
    deleteActivities
};