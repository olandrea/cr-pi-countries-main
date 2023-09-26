const { postActivities, getAllActivities, deleteActivities } = require('../controller/activityController');

const postActivitiesHandler = async (req, res) => {
  
   const {name, difficulty, duration, season, pais } = req.body
   
    try {
      if(!name || !difficulty || !duration || !season || !pais){
        throw Error('Falta infornación para crear la actividad.')
    }
    const newActivity = await postActivities(name, difficulty, duration, season, pais)
    return res.status(201).json(newActivity)
    } catch (error) {
      res.status(500).json({error:error.message})
    }
  };
  
  const getAllActivitiesHandler = async (req, res) => {
    try {
      const allActivities = await getAllActivities();
      res.status(200).json(allActivities);
    } catch (error) {
      res.status(500).json({error:error.message})
    }
  };

  const deleteActivitiesHandler = async (req, res) => {
    const { id } = req.params;
    
    try {
        if(!id){
            throw Error(`${id} no existe para borrar.`)
        }else{
            const deleteActivity = await deleteActivities(id)
            res.status(200).json(deleteActivity)
        }
        
    } catch (error) {
        res.status(500).json({error:error.message})
  }
}

  module.exports = { postActivitiesHandler, getAllActivitiesHandler, deleteActivitiesHandler };