import { configureStore } from '@reduxjs/toolkit';
import coursesSlice from './slice/coursesSlice';
import workoutsSlice from './slice/workoutsSlice';
import userSlice from './slice/userSlice';
import progressSlice from './slice/progressSlice';



const store = configureStore({
  reducer: {
    workouts: workoutsSlice,
    courses: coursesSlice,
    users: userSlice,
    progress: progressSlice,
  },
});
export default store;
