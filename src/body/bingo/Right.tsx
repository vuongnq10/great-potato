import { useState } from 'react';
import { useService } from "./useService";

const Index = () => {
  const { user, setUser, nonce, disconnect } = useService();
  const [name, setName] = useState("");

  const setupUser = () => {
    if (name) {
      setUser({ name, creator: !nonce });
    }
  };

  return (
    <>
      {!!user.name &&
        <div style={{ display: 'flex' }}>
          <h3 className="resume-title" style={{ flexGrow: 1 }}>
            {`Hi, ${user.name} - ${user.creator}`}
          </h3>
          <i
            className="bi mobile-nav-toggle bi-x"
            style={{ display: 'block', position: 'initial' }}
            onClick={disconnect}
          />
        </div>
      }
      {!user.name && (
        <div className="php-email-form mt-1" style={{ padding: 12, borderRadius: 12 }}>
          <input type="text" name="name" className="form-control" id="name" placeholder="Your Name"
            onChange={e => setName(e?.target?.value)}
          />
          <div style={{ height: 12 }} />
          <div className="text-center">
            <button type="submit" onClick={setupUser}>Join game</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Index;
