"use client"
import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';

import Chat from './Chat';
import { useSocket, SocketContext } from './useService';

const Index = () => {
  const params = useSearchParams() || {};

  const [userName, setUserName] = useState<string>(params?.get("name") || "");
  const [roomId, setRoom] = useState<string>(params?.get("id") || "");
  const [ok, setOk] = useState<Boolean>();
  const { socket, data, setData } = useSocket();
  const join = () => {
    if (socket) {
      // @ts-ignore:next-line
      socket.emit("join_room", roomId);
      setOk(true);
    }
  };

  return (
    <SocketContext.Provider value={{ socket, data, userName, roomId, updateData: setData }}>
      <section id="contact" className="contact">
        <div className="container">
          <div>
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="text"
              placeholder="room id"
              onChange={(e) => setRoom(e.target.value)}
            />
            <button onClick={() => join()}>Join room</button>
            <div style={{ height: 250 }}></div>

            {ok && <Chat />}
          </div>
        </div>
      </section>
    </SocketContext.Provider>
  );
};

export default Index;
