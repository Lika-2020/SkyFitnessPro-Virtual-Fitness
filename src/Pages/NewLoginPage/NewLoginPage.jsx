import './style.css';
import Logo from '../../images/logo.png';
import ButtonSave from '../../components/Buttons/ButtonSave/ButtonSave';

function NewLoginPage() {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="form">
          <img className="logo" src={Logo} alt="logo" />
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
