import Sticker from '../../../images/Sale sticker 1.png';
import './style.css';

function DivTitle() {
  return (
    <div className="div_title">
      <div className="div_text">
        <p className="des">Онлайн-тренировки для занятий дома</p>
        <h1 className="title">
          Начните заниматься спортом <br />и улучшите качество жизни
        </h1>
      </div>
      <div className="div_sticker">
        <img className="sticker" src={Sticker} alt="sticker" />
      </div>
    </div>
  );
}

export default DivTitle;
