import './style.css';
import Logo from '../../images/logo.png';
import ButtonLoginEnter from '../../components/Buttons/ButtonLoginEnter/ButtonLoginEnter';
import ButtonsRegisterWhite from '../../components/Buttons/ButtonsRegisterWhite/ButtonsRegisterWhite';

function LoginPage() {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="form">
          <img className="logo" src={Logo} alt="logo" />
          <input className="input" placeholder="Email" type="text" />
          <input className="input" placeholder="Пароль" type="password" />
          <div className="button__wrapper">
            <ButtonLoginEnter />
            <ButtonsRegisterWhite />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
