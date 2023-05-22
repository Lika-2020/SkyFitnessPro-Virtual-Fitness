import './style.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useEffect } from 'react';

function ProgressCounted({ exercises }) {
  const progress = useSelector(
    (state) => state.progress.exerciseProgress.progress
  );

  const navigate = useNavigate();
  console.log(progress);

  useEffect(() => {
    // Проверяем все значения прогресса

    if (progress && progress.every((item) => item >= 0.8)) {
      navigate('/progress-ok');
    }
  }, [progress, navigate]);

  return (
    <div className="progress__counted">
      <div className="progress__title">
        <span className="progress__title-title">
          Мой прогресс по тренировке:
        </span>
      </div>
      <div className="progress__block">
        <div className="progress__bar-content">
          {exercises?.map((exercise) => (
            <span key={exercise.id} className="title__span">
              {exercise}
            </span>
          ))}
        </div>
        <div className="progress__bar">
          {(progress || []).map((Progress) => {
            const value = Progress * 100;
            console.log(value);
            let color = '';
            if (value < 30) {
              color = 'progress-orange';
            } else if (value < 70) {
              color = 'progress-blue';
            } else {
              color = 'progress-purple';
            }

            return (
              <progress
                key={Progress}
                className={color}
                value={value}
                max="100"
                data-percent={`${value}%`}
              >
                {value}%
              </progress>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProgressCounted;
