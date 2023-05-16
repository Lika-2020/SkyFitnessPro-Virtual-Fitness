import { configureStore } from '@reduxjs/toolkit';
import coursesSlice from './slice/coursesSlice';
import workoutsSlice from './slice/workoutsSlice';
import userSlice from './slice/userSlice';
import progressSlice from './slice/progressSlice';
import exercisesSlice from './slice/exercisesSlice';



const store = configureStore({
  reducer: {
    workouts: workoutsSlice,
    courses: coursesSlice,
    users: userSlice,
    progress: progressSlice,
    exercises: exercisesSlice,
  },
 
});



export default store;
