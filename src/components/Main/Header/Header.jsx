import './style.css';
import { Link } from 'react-router-dom';
import Logo from '../../../images/logo.svg';
import ButtonMainEnter from '../../Buttons/ButtonMainEnter/ButtonMainEnter';

function DivHeader() {
  return (
    <div className="div_header">
      <img className="logo" src={Logo} alt="logo" />
      <Link to="/login">
        <ButtonMainEnter />
      </Link>
    </div>
  );
}

export default DivHeader;
