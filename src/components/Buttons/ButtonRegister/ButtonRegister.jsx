import '../style.css';

function ButtonsRegister({onClick}) {
  return (
    <div role='presentation' className="wrapper__button" onClick={onClick}>
      <p className="text__button">Зарегистрироваться</p>
    </div>
  );
}

export default ButtonsRegister;
