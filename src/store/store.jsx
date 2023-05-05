import { configureStore } from '@reduxjs/toolkit';
import coursesSlice from './slice/coursesSlice';
import workoutsSlice from './slice/workoutsSlice';
import userSliceReducer from './slice/userSlice';
// import videoReducer, { fetchVideo } from './slice/videoSlice';

const store = configureStore({
  reducer: {
    workouts: workoutsSlice,
    courses: coursesSlice,
    users: userSliceReducer,
  },
});
export default store;
