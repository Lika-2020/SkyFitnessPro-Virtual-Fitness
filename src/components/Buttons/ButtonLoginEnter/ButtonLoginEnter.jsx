import '../style.css';

function ButtonLoginEnter({onClick}) {
  return (
    <div role='presentation' className="wrapper__button" onClick={onClick}>
      <p className="text__button">Войти</p>
    </div>
  );
}

export default ButtonLoginEnter;

