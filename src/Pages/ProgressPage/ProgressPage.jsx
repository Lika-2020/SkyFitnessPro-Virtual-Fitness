import './style.css';
import ButtonToSend from '../../components/Buttons/ButtonToSend/ButtonToSend';

function ProgressPage() {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="form">
          <h1 className="my-progress">Мой прогресс</h1>
          <p className="progress-text">
            Сколько раз вы сделали наклоны вперед?
          </p>
          <input className="input" placeholder="Введите значение" type="text" />
          <p className="progress-text">Сколько раз вы сделали наклоны назад?</p>
          <input className="input" placeholder="Введите значение" type="text" />
          <p className="progress-text">Сколько раз вы сделали наклоны назад?</p>
          <input className="input" placeholder="Введите значение" type="text" />
          <div className="button__wrapper">
            <ButtonToSend />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressPage;
