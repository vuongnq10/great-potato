import { SocketContext, useSocket } from './useService';

import Main from './Main';
import Right from './Right';

const Index = () => {
  const { socket } = useSocket();

  return (
    <section id="contact" className="contact">
      <div className="container">
        <SocketContext.Provider value={{ socket }}>
          <div className="row">
            <div className="col-lg-8">
              <Main />
            </div>
            <div className="col-lg-4">
              <Right />
            </div>
          </div>
        </SocketContext.Provider>
      </div>
    </section>
  );
};

export default Index;
