import './style.css';
import Logo from '../../images/logo.png';
import ButtonSave from '../../components/Buttons/ButtonSave/ButtonSave';

function NewLoginPage() {
  return (
    <div className="container">
      <div className="wrapper">
        <img className="logo" src={Logo} alt="logo" />
        <div className="form">
          <p className="text">Новый логин:</p>
          <input className="input" placeholder="Логин" type="text" />
          <div className="button__wrapper">
            <ButtonSave />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewLoginPage;
