import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonProgress from '../../Buttons/ButtonProgress/ButtonProgress';
import { fetchExercises } from '../../../api/api';
import {
  setExercises,
  selectExercises,
} from '../../../store/slice/exercisesSlice';

import './style.css';

function Exercises() {
  const dispatch = useDispatch();

  const exercises = useSelector(selectExercises);
  console.log(exercises);

  const navigate = useNavigate();

  const handleProgressClick = () => {
    const progressData = {
      exercises,
    };

    if (progressData && progressData.exercises) {
      navigate('/progress', { state: progressData });
    }
  };

  useEffect(() => {
    dispatch(fetchExercises()); // Вызываем функцию загрузки упражнений

  }, [dispatch]);

  useEffect(() => {
    const storedExercises = localStorage.getItem('exercises');
    if (storedExercises) {
      dispatch(setExercises(JSON.parse(storedExercises)));
    } else {
      dispatch(fetchExercises());
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('exercises', JSON.stringify(exercises));
  }, [exercises]);

  return (
    <div className="block__exercises">
      <span className="title-exercises">Упражнения</span>

      <ul className="ul">
      
          <li key={exercises.id}>{exercises}</li>
        
      </ul>
      <ButtonProgress onClick={handleProgressClick} />
    </div>
  );
}

export default Exercises;
