import express from 'express'
import controller from './actorController.js'

const actorRoutes = express.Router();

actorRoutes.post('/api/actores', controller.handleInsertActorRequest);
actorRoutes.get('/actores', controller.handleGetActoresRequest);
actorRoutes.get('/actor/:id', controller.handleGetActorByIdRequest);
actorRoutes.get('/actor/pelicula', controller.handleGetActoresByPeliculaIdRequest);

export default actorRoutes 

