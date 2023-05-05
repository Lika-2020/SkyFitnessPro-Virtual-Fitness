import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { selectWorkout } from '../../store/slice/workoutsSlice';
import RadioButton from '../../images/radioButton.jpg';
import { fetchWorkouts } from '../../api/api';
import './style.css';
import Navigation from '../../components/WorkouteVideoPages/Navigation/Navigation';

function SelectWorkout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const workouts = useSelector((state) => state.workouts.workouts);
  const selectedWorkout = useSelector(
    (state) => state.workouts.selectedWorkout
  );

  const handleClick = (workout) => {
    if (selectedWorkout === workout) {
      dispatch(selectWorkout(null)); // unselect the workout
    } else {
      dispatch(selectWorkout(workout)); // select the workout
      navigate('/workoutVideo');
    }
  };

  const isSelected = (workout) =>
    selectedWorkout && selectedWorkout === workout;

  useEffect(() => {
    dispatch(fetchWorkouts());
  }, [dispatch]);
  console.log(workouts);

  return (
    <div className="wrappers">
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
                    role="presentation"
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
              {selectedWorkout && (
                <Navigation selectedWorkout={selectedWorkout} />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SelectWorkout;
