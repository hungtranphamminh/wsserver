import { Server } from "socket.io";
import cors from 'cors';


let io;
export const SocketRoom = {
    init: (server) => {
        io = new Server(server,{
            cors: {
                origin: "*",
                methods: ["GET", "POST"]
              }
        });
        SocketServerHandler(io)
    },

    getIo: () => {
        if (!io) {
            throw new Error('Socket.io not initialized!');
        }
        return io;
    }
};

export const SocketServerHandler = (io) => {
    io.on('connection', (socket) => {
        console.log('New client connected');
        socket.on('join call room', async({senderAddr,roomId}) => {
            socket.join(roomId);
        });

        socket.on('call',(request) => {
            const callRequest = {
                caller:request.caller,
                roomId:request.roomId
            }
            socket.to(request.roomId).emit('call',callRequest)
        })

        socket.on('reject',(request) => {
            const callReject = {
                roomId:request.roomId,
                status:request.status
            }
            socket.to(request.roomId).emit('reject',callReject)
        })

        socket.on('accept',(request) => {
            const callAccept = {
                roomId:request.roomId,
                status:request.status
            }
            socket.to(request.roomId).emit('accept',callAccept)
        })

        socket.on('leave room', (request) => {
            socket.leave(request.roomId)
        })

        socket.on('disconnect', () => {
            console.log('Client disconnected');
        });
    });
}

