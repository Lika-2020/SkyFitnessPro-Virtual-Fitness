import './style.css';
import Logo from '../../images/logo.svg';
import Sticker from '../../images/sticker.svg';
import Card1 from '../../images/prof card 2.png';
import Card2 from '../../images/prof card 3.png';
import Card3 from '../../images/prof card 20.png';
import Card4 from '../../images/prof card 6.png';
import Card5 from '../../images/prof card 28.png';
import ButtonLoginEnter from '../../components/Buttons/ButtonLoginEnter/ButtonLoginEnter';
import ButtonUp from '../../components/Buttons/ButtonUp/ButtonUp';

export function DivHeader() {
  return (
    <div className="div_header">
      <img className="logo" src={Logo} alt="logo" />
      <ButtonLoginEnter />
    </div>
  );
}

export function DivTitle() {
  return (
    <div className="div_title">
      <div className="div_text">
        <p className="des">Онлайн-тренировки для занятий дома</p>
        <h1 className="title">
          Начните заниматься спортом <br />и улучшите качество жизни
        </h1>
      </div>
      <img className="sticker" src={Sticker} alt="sticker" />
    </div>
  );
}

export function DivMain() {
  return (
    <div className="div_main">
      <img className="sports_card" src={Card1} alt="yoga" />
      <img className="sports_card" src={Card2} alt="stretching" />
      <img className="sports_card" src={Card3} alt="dance fitness" />
      <img className="sports_card" src={Card4} alt="step aerobic" />
      <img className="sports_card" src={Card5} alt="bodyflex" />
    </div>
  );
}

export function DivFooter() {
  return (
    <div className="div_footer">
      <ButtonUp />
    </div>
  );
}
