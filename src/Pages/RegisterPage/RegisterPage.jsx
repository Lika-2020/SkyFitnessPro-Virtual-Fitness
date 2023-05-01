import './style.css';
import Logo from '../../images/logo.png';
import ButtonRegister from '../../components/Buttons/ButtonRegister/ButtonRegister';

function RegisterPage() {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="form">
          <img className="logo" src={Logo} alt="logo" />
          <input className="input" placeholder="Email" type="text" />
          <input className="input" placeholder="Пароль" type="password" />
          <input
            className="input"
            placeholder="Повторите пароль"
            type="password"
          />
          <div className="button__wrapper">
            <ButtonRegister />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
