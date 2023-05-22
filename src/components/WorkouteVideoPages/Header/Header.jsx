import Logo from '../../../images/logo.png';
import Avatar from '../../../images/userAvatar.jpg';
import './style.css';

function Header() {
  
const handleLogout = (event) => {
if (event.target.value === 'option2') {
window.location.href = '/';
}
};

return (
<div className="header">
<img className="logo" src={Logo} alt="logo" />
<div className='user-avatar'>
<img src={Avatar} width={30} height={30} alt="Avatar" />
<select id="options" name="options" onChange={handleLogout}>
<option value="option1">Сергей</option>
<option value="option2">Выход</option>
</select>
</div>
</div>
);
}

export default Header;