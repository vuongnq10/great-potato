import { Server } from "socket.io";
import { getRandom1 } from 'utils/bingo';

export default (_, res) => {
  if (res?.socket?.server?.io) {
    console.log("Already set up");
    res.end();
    return;
  }

  const io = new Server(res?.socket?.server);
  io.on("connection", (socket) => {
    socket.on("join_room", (roomId, cb) => {
      if (!roomId) {
        cb(socket.id);
      } else {
        socket.join(roomId);
      }
    });

    socket.on("send_msg", (data) => {
      socket.to(data.roomId).emit("receive_msg", data);
    });

    socket.on("disconnect", () => {
      console.log("A user disconnected:", socket.id);
    });

    //-----
    socket.on("generating", (nonce, options) => {
      io.in(nonce).emit("generating", {
        ...options,
        bingoNumber: getRandom1()
      });
    });

    socket.onAny((event, ...args) => {
      console.log(event, args);
    });
  });

  res.socket.server.io = io;
  res.end();
}
