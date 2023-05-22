import './style.css';
import { Link } from 'react-router-dom';
import Card1 from '../../../images/prof card 2.png';
import Card2 from '../../../images/prof card 3.png';
import Card3 from '../../../images/prof card 20.png';
import Card4 from '../../../images/prof card 6.png';
import Card5 from '../../../images/prof card 28.png';

function DivMain() {
  return (
    <div className="body">
      <div className="div_main">
        <Link to="/yoga">
          <img className="sports_card" src={Card1} alt="yoga" />
        </Link>
        <Link to="/stretching">
          <img className="sports_card" src={Card2} alt="stretching" />
        </Link>
        <Link to="/dancefitness">
          <img className="sports_card" src={Card3} alt="dance fitness" />
        </Link>
        <Link to="/stepaerobic">
          <img className="sports_card" src={Card4} alt="step aerobic" />
        </Link>
        <Link to="/bodyflex">
          <img className="sports_card" src={Card5} alt="bodyflex" />
        </Link>
      </div>
    </div>
  );
}

export default DivMain;
