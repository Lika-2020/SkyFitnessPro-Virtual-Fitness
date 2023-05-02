import { configureStore } from '@reduxjs/toolkit';
import workoutsSlice from './slice/workoutSlice';

export default configureStore({
  reducer: {
    workouts: workoutsSlice,
  },
});

