import './style.css';
import Logo from '../../../images/logo2.svg';
import SkillCard from '../../../images/skill card 17.png';

function Header() {
  return (
    <div className="div_header">
      <div className="logo_header">
        <img className="logo" src={Logo} alt="logo" />
      </div>
      <img className="skill_card" src={SkillCard} alt="skill card" />
    </div>
  );
}

export default Header;
