import express from 'express';
import { registerCall } from '../controllers/socketRoomControllers.js';

const socketRouter = express.Router();

socketRouter.post('/register-call', registerCall);

export default socketRouter;