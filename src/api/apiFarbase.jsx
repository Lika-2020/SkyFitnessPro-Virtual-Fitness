import { ref, get } from 'firebase/database';
import { useDispatch } from 'react-redux';
import { setCourses } from '../store/slice/coursesSlice';
import {  setWorkouts } from '../store/slice/workoutsSlice';
import  db  from '../database/db';

export function useDataBase(refURL) {
  const dispatch = useDispatch();
  const databaseRef = ref(db, refURL);

  get(databaseRef)
    .then((snapshot) => {
      const data = snapshot.val();
      dispatch(
        setCourses({
          description: data.description,
          directions: data.directions,
          suitable: data.suitable,
          id: data.id,
          name: data.name,
          workouts: data.workouts,
        })
      );
    })
    .catch((error) => {
      console.error(error);
    });
}

export function useDatabaseForWorkout() {
  const dispatch = useDispatch();
  const workoutsRef = ref(db, 'workouts');

  get(workoutsRef)
    .then((snapshot) => {
      const data = snapshot.val();
      dispatch(
        setWorkouts({
          workouts: data,
        })
      );
    })
    .catch((error) => {
      console.error(error);
    });
}
