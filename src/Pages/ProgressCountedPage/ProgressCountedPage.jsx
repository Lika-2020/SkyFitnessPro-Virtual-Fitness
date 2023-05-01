import HandOk from '../../images/hand-ok.png';
import './style.css';

function ProgressCountedPage() {
  return (
    <div className="container">
      <h1 className="title">Ваш прогресс засчитан!</h1>
      <img className="logo__hand" src={HandOk} alt="Hand" />
    </div>
  );
}

export default ProgressCountedPage;
