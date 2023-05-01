import './style.css';
import Logo from '../../images/logo.png';
import ButtonSave from '../../components/Buttons/ButtonSave/ButtonSave';

function NewPasswordPage() {
  return (
    <div className="container">
      <div className="wrapper">
        <img className="logo" src={Logo} alt="logo" />
        <div className="form">
          <p className="text">Новый пароль:</p>
          <input className="input" placeholder="Пароль" type="password" />
          <input
            className="input"
            placeholder="Повторите пароль"
            type="password"
          />
          <div className="button__wrapper">
            <ButtonSave />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewPasswordPage;
