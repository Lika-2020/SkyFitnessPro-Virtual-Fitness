import { createSlice } from '@reduxjs/toolkit';
import { fetchExercises } from '../../api/api';

const initialState = {
  exercises: [],
  selectedExercise: null,
};

const exercisesSlice = createSlice({
  name: 'exercises',
  initialState,
  reducers: {
    setExercises: (state, action) => ({
      ...state,
      exercises: action.payload,
    }),
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchExercises.pending, (state) => ({
        ...state,
        loading: true,
        state,
        error: null,
      }))
      .addCase(fetchExercises.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        ...state,
        exercises: action.payload, // Обновляем состояние exercises с полученными данными упражнений
      }))
      .addCase(fetchExercises.rejected, (state, action) => ({
        ...state,
        loading: false,
        ...state,
        error: action.error.message,
      }));
  },
});

export const { setExercises, selectExercise } = exercisesSlice.actions;

console.log(setExercises);

export const selectExercises = (state) => state.exercises.exercises;

export default exercisesSlice.reducer;
