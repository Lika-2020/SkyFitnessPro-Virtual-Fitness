import './style.css';

function topFunction() {
  document.documentElement.scrollTop = 0;
}

function ButtonUp() {
  return (
    <div>
      <button type="button" onClick={topFunction} className="text__button-up">
        Наверх ↑
      </button>
    </div>
  );
}

export default ButtonUp;
