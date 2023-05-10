import './style.css';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import ButtonToSend from '../../components/Buttons/ButtonToSend/ButtonToSend';
import { setCompletedCount, setExerciseProgress  } from '../../store/slice/progressSlice';

function ProgressPage() {
  const dispatch = useDispatch();
  const location = useLocation();
  const progressData = location.state;
  const [inputs, setInputs] = useState({});

  const handleInputChange = (e, exerciseIndex) => {
    setInputs((prevInputs) => ({ ...prevInputs, [exerciseIndex]: e.target.value }));
  };

  const handleSubmit = () => {
    let completedCount = 0;
    const exerciseProgress = {};

    progressData.exercises.forEach((exercise, index) => {
      const regex = /\((\d+)\s*повторен/i;
      const match = exercise.title.match(regex);
      if (match) {
        const exerciseCount = Number(match[1]);
        const inputCount = Number(inputs[index]);
        if (!Number.isNaN(Number(inputCount))) {
          const completed = Math.min(inputCount, exerciseCount);
          completedCount += completed;
          exerciseProgress[index] = completed / exerciseCount;
        
        }
      }
    });
    dispatch(setCompletedCount(completedCount));
    dispatch(setExerciseProgress({ exerciseId: progressData.id, progress: exerciseProgress }));
  };




  return (
    <div className="container">
      <div className="wrapper">
        <div className="form">
          <h1 className="my-progress">Мой прогресс</h1>
          {progressData?.exercises &&
            progressData.exercises.map((exercise) => (
              <div>
                <p
                  role="presentation"
                  key={exercise}
                  className="progress-text"
                >
                  Сколько раз вы сделали {exercise} ?
                </p>
                <input
                  className="input"
                  placeholder="Введите значение"
                  type="number"  onChange={(e) => handleInputChange(exercise, e)}   
                />
              </div>
            ))}
          <div className="button__wrapper">
            <ButtonToSend onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressPage;
