import { Server } from "socket.io";

export default (_, res) => {
  if (res?.socket?.server?.io) {
    console.log("Already set up");
    res.end();
    return;
  }

  const io = new Server(res?.socket?.server);
  io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);
    socket.on("join_room", (roomId) => {
      socket.join(roomId);
      console.log(`user with id-${socket.id} joined room - ${roomId}`);
    });

    socket.on("send_msg", (data) => {
      socket.to(data.roomId).emit("receive_msg", data);
    });

    socket.on("disconnect", () => {
      console.log("A user disconnected:", socket.id);
    });
  });

  res.socket.server.io = io;
  res.end();
}
