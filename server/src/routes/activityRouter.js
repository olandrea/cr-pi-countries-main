const { Router } = require("express");

const { postActivitiesHandler, getAllActivitiesHandler, deleteActivitiesHandler } = require('../handlers/activityHandlers');

const activityRouter = Router();

activityRouter.post('/', postActivitiesHandler);
activityRouter.get('/', getAllActivitiesHandler);
activityRouter.delete('/:id', deleteActivitiesHandler);

module.exports = activityRouter;