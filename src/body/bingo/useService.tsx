import { useState, createContext, useEffect } from 'react';
import { io } from 'socket.io-client';
import { useSearchParams, useRouter } from 'next/navigation';

import { UserType } from './type';

export const SocketContext = createContext({
  socket: null,
});

const getUser = () => JSON.parse(localStorage.getItem('user') || `{}`);
const saveUser = user => localStorage.setItem('user', JSON.stringify(user));
const removeUser = () => localStorage.removeItem('user');

export const useSocket = () => {
  const [socket, setSocket] = useState<any>(null);

  useEffect(() => {
    const get = async () => {
      // const socketIO = io('https://great-potato-414722.ts.r.appspot.com');
      const socketIO = io('http://localhost:3001');
      setSocket(socketIO);
    };
    get();

    return () => {
      socket?.disconnect();
    }
  }, []);
  return { socket };
}

export const useService = socket => {
  const router = useRouter();
  const params = useSearchParams() || {};
  // @ts-ignore:next-line
  const nonce = params?.get("nonce") || "";

  const [user, setUser] = useState<UserType>({ name: "", creator: false });

  const setupUser = user => {
    setUser(user);
    saveUser(user);
    socket.emit("join_room", nonce, id => {
      if (!nonce) {
        // @ts-ignore:next-line
        const urlParams = new URLSearchParams(params);
        // @ts-ignore:next-line
        urlParams.set('nonce', id);
        router.push(`${location.pathname}?${urlParams.toString()}`);
      }
    });
  };

  const disconnect = () => {
    socket?.disconnect();
    setUser({ name: "", creator: false });
    removeUser();
  }

  useEffect(() => {
    if (socket) {
      if (nonce) {
        const user = getUser();
        setupUser(user);
      } else {
        setUser({ name: "", creator: false });
        removeUser();
      }
    }
  }, [nonce, socket]);

  return { user, setUser: setupUser, nonce, disconnect };
};