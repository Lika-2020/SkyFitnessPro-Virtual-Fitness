import './style.css';
import Card1 from '../../../images/prof card 2.png';
import Card2 from '../../../images/prof card 3.png';
import Card3 from '../../../images/prof card 20.png';
import Card4 from '../../../images/prof card 6.png';
import Card5 from '../../../images/prof card 28.png';

function DivMain() {
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

export default DivMain;
