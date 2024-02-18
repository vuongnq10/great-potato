import { useState, useEffect, useContext } from 'react';

import { getRandom1 } from 'utils/bingo';

import { SocketContext, useService } from "./useService";
import './style.css';

let jumpNumb;
const Index = () => {
  const { socket } = useContext(SocketContext);
  const { user, nonce } = useService(socket);
  const [number, setNumber] = useState(0);

  const genNumber = () => {
    socket.emit('generating', nonce, { generating: true });

    setTimeout(() => {
      socket.emit('generating', nonce, { generating: false });
    }, 10000);
  };

  useEffect(() => {
    socket?.on('generating', options => {
      if (options.generating) {
        jumpNumb = setInterval(() => {
          setNumber(getRandom1());
        }, 200);
      } else {
        clearInterval(jumpNumb);
        setNumber(options.bingoNumber);
      }
    });
  }, [socket]);

  return (
    <div className="bingo-main">
      <div className="numbers">
        <div className="generating">{`${number || '-'}`}</div>
        <div className="number-box">
          <div className="item">12</div>
          <div className="item">12</div>
          <div className="item">12</div>
          <div className="item">12</div>
        </div>
      </div>
      {user?.creator && (
        <div className="text-center">
          <button className="get-number" onClick={genNumber}>Get number</button>
        </div>
      )}
    </div>
  );
};

export default Index;
