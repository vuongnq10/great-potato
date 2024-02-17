import { useState, useEffect, createContext } from 'react';
import { io } from 'socket.io-client';

interface IMsgDataType {
  roomId: String | number;
  user: String;
  msg: String;
  time: String | number;
};

export const SocketContext = createContext({
  socket: null,
  data: [],
  updateData: data => { },
  userName: "",
  roomId: "",
  generating: false,
  updateGenerating: data => { },
});

export const useSocket = () => {
  const [socket, setSocket] = useState<any>(null);
  const [data, setData] = useState<any>([]);
  const [generating, setGenerating] = useState();

  useEffect(() => {
    const get = async () => {
      await fetch('/api/chat');
      const socketIO = io();
      setSocket(socketIO);
    };
    get();

    return () => {
      socket?.disconnect();
    }
  }, []);
  useEffect(() => {
    if (socket) {
      socket.on('receive_msg', (data: IMsgDataType) => {
        updateData(data);
      });
      socket.on('generating', options => {
        setGenerating(options.generating);
      });
    }
  }, [socket]);

  const updateData = data => setData(st => ([...st, data]));

  return { socket, data, setData: updateData, generating, setGenerating };
}