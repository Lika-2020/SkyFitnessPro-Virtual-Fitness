import { createSlice } from '@reduxjs/toolkit';
 import {fetchWorkouts} from '../../api/api';

const initialState = {
  workouts: [],
  selectedWorkout: null,
  loading: false,
  error: null,
};

const workoutsSlice = createSlice({
  name: 'workouts',
  initialState,
  reducers: {
    selectWorkout: (state, action) => ({
      ...state,
      selectedWorkout: action.payload,
    }),
    setSelectedWorkout: (state, action) => ({
      ...state,
      selectedWorkout: action.payload,
    }),
    setWorkouts: (state, action) => ({
      ...state,
      workouts: action.payload,
    }),

    setLoading: (state, action) => ({
      ...state,
      loading: action.payload,
    }),
  
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWorkouts.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(fetchWorkouts.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        workouts: action.payload,
      }))
      .addCase(fetchWorkouts.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));

  },
});

export const { selectWorkout, setSelectedWorkout, setWorkouts, setLoading} = workoutsSlice.actions;

export const selectSelectedWorkout = (state) => state.workouts.selectedWorkout;
export const selectWorkouts = (state) => state.workouts.workouts;
export const selectLoading = (state) => state.workouts.loading;
export const selectError = (state) => state.workouts.error;

export default workoutsSlice.reducer