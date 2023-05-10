import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  exercisesCount: 0,
  completedCount: 0,
  exerciseProgress: {},
};

const progressSlice = createSlice({
  name: 'progress',
  initialState,
  reducers: {
    setExercisesCount: (state, action) => ({
      ...state,
      exercisesCount: action.payload,
    }),
    setCompletedCount: (state, action) => ({
      ...state,
      completedCount: action.payload,
    }),
    setExerciseProgress: (state, action) => ({
      ...state,
      exerciseProgress: action.payload,
    }),
  },
});

export const { setExercisesCount, setCompletedCount, setExerciseProgress } =
  progressSlice.actions;

export default progressSlice.reducer;
