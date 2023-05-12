import './style.css';
import Logo from '../../images/logo.png';
import Avatar from '../../images/avatar.png';
import ButtonChangeLogin from '../../components/Buttons/ButtonChangeLogin/ButtonChangeLogin';
import ButtonChangePassword from '../../components/Buttons/ButtonChangePassword/ButtonChangePassword';
import ButtonGo from '../../components/Buttons/ButtonGo/ButtonGo';

function MyProfilePage() {
  return (
    <div className="container-myProf">
      <div className="header-myProf">
        <img src={Logo} alt="Logo" />
        <div className="user-myProf">
          <img src={Avatar} alt="Avatar" className="user__avatar" />
          <select name="" id="">
            <option value="Сергей">Сергей</option>
          </select>
        </div>
      </div>
      <div className="user__profile">
        <h1 className="title-myProf">Мой профиль</h1>
        <p className="user__login user__info">Логин: sergey.petrov96</p>
        <p className="user__password user__info">Пароль: 4fkhdj880d</p>
        <div className="user__buttons">
          <ButtonChangeLogin />
          <ButtonChangePassword />
        </div>
      </div>
      <div className="my__courses">
        <h1 className="title-myProf">Мои курсы</h1>
        <div className="courses__cards">
          <div className="courses__card card-3">
            <p className="card__text">Йога</p>
            <div className="card__button">
              <ButtonGo />
            </div>
          </div>
          <div className="courses__card card-2">
            <p className="card__text">Стретчинг</p>
            <div className="card__button">
              <ButtonGo />
            </div>
          </div>
          <div className="courses__card card-1">
            <p className="card__text">Бодифлекс</p>
            <div className="card__button">
              <ButtonGo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfilePage;
