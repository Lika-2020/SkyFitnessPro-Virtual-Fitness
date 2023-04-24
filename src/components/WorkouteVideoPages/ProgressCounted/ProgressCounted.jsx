import './style.css';

function ProgressCounted() {
  return (
    <div className="progress__counted">
        <div className='progress__title'>
      <span className='progress__title-title'>Мой прогресс по тренировке 2:</span>
      </div>
  <div className='progress__block'>
  <div className='progress__bar-content'>
      <span className='title__span'>Наклоны вперед </span>
        <span className='title__span'>Наклоны назад </span>
        <span className='title__span'>Поднятие ног, <br /> согнутых в коленях </span>
        </div>
        
      <div className='progress__bar'>
        <progress className='progress-blue' value="45" max="100"> 45 </progress>
        <progress className='progress-orange' value="45" max="100"> 45 </progress>
        <progress className='progress-purple' value="45" max="100"> 45 </progress>
      </div>
   
    
   

  

      </div>
       
    
    </div>
  );
}

export default ProgressCounted;
