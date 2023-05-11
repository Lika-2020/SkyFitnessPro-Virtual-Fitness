import './style.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import ButtonToSend from '../../components/Buttons/ButtonToSend/ButtonToSend';
import {
  setCompletedCount,
  setExerciseProgress,
} from '../../store/slice/progressSlice';



function ProgressPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const progressData = location.state;
  const [inputs, setInputs] = useState([]);

  const { parseInt } = window;


  const handleInputChange = (e) => {
    const newValue = parseInt(e.target.value, 10); // преобразуем введенное значение в число
    const newInputs = [...inputs]; // копируем массив inputs
    newInputs[e.target.id] = newValue; // присваиваем новое значение на соответствующую позицию в массиве
    setInputs(newInputs); 
  };

  const handleKeyDown = (e) => {
    if (e.key === "Backspace" && e.target.value === "") {
      setInputs((prevInputs) => prevInputs.slice(0, -1));
    }
  };


  

  const handleSubmit = () => {

    let completedCount = 0;
    const exerciseProgress = [];
    
    if (progressData && progressData.exercises) {
    progressData.exercises.forEach((exercise, index) => {
      console.log(exercise);
      const regex = /\((\d+)\s*повторен/i;
      const match = exercise.match(regex);
      console.log(match);

      if (match) {
        const exerciseCount = Number(match[1]);
        console.log(inputs);
        const inputCount = Number(inputs[index]);
        if (!Number.isNaN(Number(inputCount))) {
          const completed = Math.min(inputCount, exerciseCount);
          completedCount += completed;
          exerciseProgress[index] = completed / exerciseCount;
          navigate('/workoutVideo');
          console.log(exerciseProgress)
        }
      }
        
    });
  }
    dispatch(setCompletedCount(completedCount));
    dispatch(
      setExerciseProgress({
        exerciseId: progressData.id,
        progress: exerciseProgress,
      })
    );
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="form">
          <h1 className="my-progress">Мой прогресс</h1>
          {progressData?.exercises &&
            progressData.exercises.map((exercise, index) => (
              <div>
                <p role="presentation" key={exercise} className="progress-text">
                  Сколько раз вы сделали {exercise} ?
                </p>
                <input
                  className="input"
                  placeholder="Введите значение"
                  type="number"
                  onChange={(e) => handleInputChange(e)}
                  onKeyDown={handleKeyDown}
                  id={index}
                />
              </div>
            ))}
          <div className="button__wrapper">
            <ButtonToSend onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressPage;
