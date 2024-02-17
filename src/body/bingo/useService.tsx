import { useState, createContext, useEffect } from 'react';
import { io } from 'socket.io-client';
import { useSearchParams, useRouter } from 'next/navigation';

import { UserType } from './type';

export const SocketContext = createContext({});

const getUser = () => JSON.parse(localStorage.getItem('user') || `{}`);
const saveUser = user => localStorage.setItem('user', JSON.stringify(user));
const removeUser = () => localStorage.removeItem('user');

export const useService = () => {
  const router = useRouter();
  const params = useSearchParams() || {};
  // @ts-ignore:next-line
  const nonce = params?.get("nonce") || "";

  const [socket, setSocket] = useState<any>(null);
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
    if (nonce) {
      setUser(getUser());
    } else {
      setUser({ name: "", creator: false });
      removeUser();
    }
  }, [nonce]);

  useEffect(() => {
    const get = async () => {
      await fetch('/api/bingo');
      const socketIO = io();
      setSocket(socketIO);
    };
    get();

    return () => {
      socket?.disconnect();
    }
  }, []);


  return { user, setUser: setupUser, nonce, disconnect };
};