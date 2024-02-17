"use client"
import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

import Chat from './Chat';
import Cards from './Cards';
import { getRandom1 } from './service';

import { useSocket, SocketContext } from './useService';

const Index = () => {
  const params = useSearchParams() || {};
  const router = useRouter();
  // @ts-ignore:next-line
  const nonce = params?.get("nonce") || "";
  // @ts-ignore:next-line
  const tempCreator = params?.get("creator") || "";

  const { socket, data, setData, generating } = useSocket();

  const [userName, setUserName] = useState<string>("");
  const [roomId, setRoom] = useState<string>(nonce);
  const [ok, setOk] = useState<Boolean>();
  const [loadNumb, setLoadNumb] = useState<Number>(0);

  const join = () => {
    if (socket) {
      socket.emit("join_room", roomId, id => {
        setRoom(id);
        // @ts-ignore:next-line
        if (!nonce) {
          // @ts-ignore:next-line
          const urlParams = new URLSearchParams(params);
          // @ts-ignore:next-line
          urlParams.set('nonce', id);
          router.push(`${location.pathname}?${urlParams.toString()}`);
        }
      });
      setOk(true);
    }
  };

  const getNumber = () => {
    socket.emit('generating', nonce, { generating: true });
    const jumpNumb = setInterval(() => {
      setLoadNumb(getRandom1());
    }, 200);


    setTimeout(() => {
      socket.emit('generating', nonce, { generating: false, number: getRandom1 });
      clearInterval(jumpNumb);
      setLoadNumb(0);
    }, 10000);
  }

  useEffect(() => {
    if (nonce && socket) {
      socket.emit("join_room", nonce);
    }
  }, [nonce, socket])

  return (
    <SocketContext.Provider value={{ socket, data, userName, roomId, updateData: setData, generating }}>
      <section id="contact" className="contact">
        <div className="container">
          <div>
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setUserName(e.target.value)}
            />
            <button onClick={() => join()}>Join room</button>
            <div style={{ height: 250 }}></div>
            {tempCreator && <button onClick={getNumber}>Get Number</button>}
            {!!loadNumb && <div>{`${loadNumb}`}</div>}
            {!tempCreator && <Cards />}
            {ok && <Chat />}
          </div>
        </div>
      </section>
    </SocketContext.Provider>
  );
};

export default Index;