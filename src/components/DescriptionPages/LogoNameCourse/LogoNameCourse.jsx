import './style.css';
import { Link } from 'react-router-dom';
import Logo from '../../../images/logo2.svg';
import SkillCard from '../../../images/skill card 17.png';

function Header() {
  return (
    <div className="div_header_courses">
      <div className="logo_header_courses">
        <Link to="/">
          <img className="logo" src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="div_skill_card_courses">
        <img className="skill_card" src={SkillCard} alt="skill card" />
      </div>
    </div>
  );
}

export default Header;
