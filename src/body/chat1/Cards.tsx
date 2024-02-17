import { useEffect, useContext, useState } from 'react';

import { SocketContext } from './useService';
import { getRandom1 } from './service';

let genNum;
const Cards = () => {
  const { generating } = useContext(SocketContext);
  const [loadNumb, setLoadNumb] = useState<Number>(0);

  useEffect(() => {
    if (generating) {
      genNum = setInterval(() => {
        setLoadNumb(getRandom1());
      }, 200);
    } else {
      clearInterval(genNum);
      setLoadNumb(0);
    }
  }, [generating]);

  return <div>Cards {!!loadNumb && `${loadNumb}`}</div>
};

export default Cards;
