import Logo from '../../../images/logo.png';
import Avatar from '../../../images/userAvatar.jpg'
import './style.css';

function Header() {
  return (
    <div className="header">
      <img className="logo" src={Logo} alt="logo" />
    
   <div className='user-avatar'>
    <img src={Avatar} width={30} height={30} alt="Avatar" />
      <select id="options" name="options">
        <option value="option1">Сергей</option>
        <option value="option2">Выход</option>
      </select>
      </div>
    </div>
  );
}

export default Header;
