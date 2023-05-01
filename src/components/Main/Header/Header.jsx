import './style.css';
import Logo from '../../../images/logo.svg';
import ButtonMainEnter from '../../Buttons/ButtonMainEnter/ButtonMainEnter';

function DivHeader() {
  return (
    <div className="div_header">
      <img className="logo" src={Logo} alt="logo" />
      <ButtonMainEnter />
    </div>
  );
}

export default DivHeader;
