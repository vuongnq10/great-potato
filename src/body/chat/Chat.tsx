"use client"
import React, { useState, useContext } from 'react';
import { SocketContext, useSocket } from './useService';

export default () => {
  const { userName, roomId, data, socket, updateData } = useContext(SocketContext);
  const [currentMsg, setCurrentMsg] = useState<String>("aaaaa");

  const send = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('send data')
    if (currentMsg !== "") {
      const msgData: any = {
        roomId,
        user: userName,
        msg: currentMsg,
        time: new Date().getTime(),
      };
      updateData(msgData);
      await socket?.emit("send_msg", msgData);
      // setCurrentMsg("");
    }
  }

  return (
    <>
      <div>{`${userName} is in room: ${roomId}`}</div>
      {data.map(({ roomId, user, msg, time }, idx) => (
        <div key={`${idx}`}>
          {`${user} send "${msg}" at ${time} in ${roomId}`}
        </div>
      ))}
      <div>
        <form onSubmit={e => send(e)}>
          <input
            type="text"
            value={`${currentMsg}`}
            placeholder="Type your message.."
            onChange={(e) => setCurrentMsg(e.target.value)}
          />
          <button>Send</button>
        </form>
      </div>
    </>
  );
}