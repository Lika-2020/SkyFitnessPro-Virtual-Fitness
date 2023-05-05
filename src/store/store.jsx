import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from './slice/coursesSlice';
import workoutsSlice from './slice/workoutSlice';
// import videoReducer, { fetchVideo } from './slice/videoSlice';

const store = configureStore({
  reducer: {
    workouts: workoutsSlice,
     courses: coursesReducer,
  },
});
export default store;