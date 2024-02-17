import { SocketContext } from './useService';

import Main from './Main';
import Right from './Right';

const Index = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <SocketContext.Provider value={{}}>
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
