import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { selectWorkout } from '../../store/slice/workoutSlice';
import RadioButton from '../../images/radioButton.jpg';
import fetchWorkouts from '../../api/api';


import './style.css';

function SelectWorkout() {
  const dispatch = useDispatch();
  const workouts = useSelector((state) => state.workouts.workouts);
  const selectedWorkout = useSelector(
    (state) => state.workouts.selectedWorkout
  );

  console.log(workouts);
  const handleClick = (workout) => {
    dispatch(selectWorkout(workout));
  };

  const isSelected = (workout) =>
    selectedWorkout && selectedWorkout.id === workout.id;

  useEffect(() => {
    dispatch(fetchWorkouts());
  }, [dispatch]);

  

  return (
    <div className="wrapper">
      <div className="container">
        <div className="block">
          <div className="title">
            <span className="title-workout">Выберите тренировку</span>
          </div>
          {workouts.length === 0 ? (
            <div>Loading...</div>
          ) : (
            <div className="buttons">
              {workouts.map((workout) => (
                <div
                  role="presentation"
                  key={workout.id}
                  className={`button__workout ${
                    isSelected(workout) ? 'selected' : ''
                  }`}
                  onClick={() => handleClick(workout)}
                >
                  <div className="select">
                    <span className="title-lesson">{workout.name}</span>
                    {isSelected(workout) && (
                      <img src={RadioButton} alt="button" />
                    )}
                  </div>
                  <span className="title-day">{`${workout.heading}/${workout.day}`}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SelectWorkout;
