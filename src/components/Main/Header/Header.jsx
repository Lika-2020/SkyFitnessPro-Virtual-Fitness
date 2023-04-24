import './style.css';
import Logo from '../../../images/logo.svg';
import ButtonLoginEnter from '../../Buttons/ButtonLoginEnter/ButtonLoginEnter';

function DivHeader() {
  return (
    <div className="div_header">
      <img className="logo" src={Logo} alt="logo" />
      <ButtonLoginEnter />
    </div>
  );
}

export default DivHeader;
