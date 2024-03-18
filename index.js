import express from "express";
import bodyParser from "body-parser";
import http from "http"
import {SocketRoom} from "./src/services/socket.js"
import mainRouter from "./src/routes/index.js";


const app = express();
/* init server */
const server = http.createServer(app);
app.use(bodyParser.json());
/* add router to server */
app.use('/api/v1', mainRouter);


SocketRoom.init(server);

server.listen(3000, () => {
    console.log('Listening on port 3000');
});
