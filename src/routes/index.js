import express from 'express';
import socketRouter from './socketRoutes.js';

const mainRouter = express.Router();

mainRouter.use('/socket-services', socketRouter);

export default mainRouter;