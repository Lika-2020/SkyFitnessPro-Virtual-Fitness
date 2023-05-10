import './style.css';
import { useSelector } from 'react-redux';

function ProgressCounted() {
  const { exercisesCount, exerciseProgress } = useSelector(
    (state) => {
      console.log(state); // log state object to see what it contains
      return state.progress;
    }
  );
  
  

  if (!exercisesCount) {
    return null; // Ничего не выводим, если нет данных
  }

  return (
    <div className="progress__counted">
      <div className="progress__title">
        <span className="progress__title-title">Мой прогресс:</span>
      </div>
      <div className="progress__block">
        <div className="progress__bar-content">
          {Object.keys(exerciseProgress).map((exerciseId) => (
            <span key={exerciseId} className="title__span">
              {exerciseId} ({exerciseProgress[exerciseId]} повторений)
            </span>
          ))}
        </div>
        <div className="progress__bar">
          {Object.keys(exerciseProgress).map((exerciseId) => {
           const progress = Math.round(
            (exerciseProgress[exerciseId] / exercisesCount) * 100
          );
          
            
            let colorClass = '';
            if (progress >= 80) {
              colorClass = 'progress-green';
            } else if (progress >= 50) {
              colorClass = 'progress-orange';
            } else {
              colorClass = 'progress-red';
            }
            
            return (
              <progress
                key={exerciseId}
                className={colorClass}
                value={exerciseProgress[exerciseId]}
                max={exercisesCount}
              >
                {progress}%
              </progress>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProgressCounted;
