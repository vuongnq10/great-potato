import { useService } from "./useService";
import './style.css';

const Index = () => {
  const { user } = useService();
  return (
    <div className="bingo-main">
      <div className="numbers">
        <div className="generating">12</div>
        <div className="number-box">
          <div className="item">12</div>
          <div className="item">12</div>
          <div className="item">12</div>
          <div className="item">12</div>
        </div>
      </div>
      {user?.creator && (
        <div className="text-center">
          <button className="get-number" onClick={() => { }}>Get number</button>
        </div>
      )}
    </div>
  );
};

export default Index;
