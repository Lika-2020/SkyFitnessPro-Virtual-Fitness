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

  /* const handleClick = (workout) => {
    console.log(`Clicked workout ${workout.id}`);
    dispatch(selectWorkout(workout));
  };
*/

  const handleClick = (workout) => {
    if (selectedWorkout === workout) {
      dispatch(selectWorkout(null)); // unselect the workout
    } else {
      dispatch(selectWorkout(workout)); // select the workout
    }
  };

  console.log(workouts)
  const isSelected = (workout) =>
    selectedWorkout && selectedWorkout === workout;

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
                  <div
                    className={`select ${
                      isSelected(workout) ? 'select-selected' : ''
                    }`}
                  >
                    <span
                      className={`title-lesson ${
                        isSelected(workout) ? 'select-selected' : ''
                      }`}
                    >
                      {workout.name}
                    </span>
                    {isSelected(workout) && (
                      <img src={RadioButton} alt="button" />
                    )}
                  </div>
                  <span
                    className={`title-day ${
                      isSelected(workout) ? 'select-selected' : ''
                    }`}
                  >{`${workout.heading}/${workout.day}`}</span>
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
