import Logo from '../../../images/logo.png';
import './style.css';

function Header() {
  return (
    <div className="header">
      <img className="logo" src={Logo} alt="logo" />

      <span>Сергей</span>
    </div>
  );
}

export default Header;
