import './style.css';

function ProgressCounted() {
  return (
    <div className="progress__counted">
        <div className='progress__title'>
      <span className='progress__title-title'>Мой прогресс по тренировке 2:</span>
      </div>
      <div className='progress__bar'>
        <span className='title__span'>Наклоны вперед </span>
      <progress value="45" max="100"> 45 </progress>
      </div>

      <div className='progress__bar'>
        <span className='title__span'>Наклоны назад </span>
      <progress className='progress-orange' value="45" max="100"> 45 </progress>
      </div>

      <div className='progress__bar'>
        <span className='title__span'>Наклоны назад </span>
      <progress className='progress-purple' value="45" max="100"> 45 </progress>
      </div>
    </div>
  );
}

export default ProgressCounted;
