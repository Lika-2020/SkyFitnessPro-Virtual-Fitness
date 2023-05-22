import './style.css';

function ButtonGo({ onClick }) {
  return (
    <div role="presentation" className="wrapper__button-go" onClick={onClick}>
      <p className="text__button-go">Перейти →</p>
    </div>
  );
}

export default ButtonGo;
