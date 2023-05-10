/* import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  description: null,
  directions: [],
  suitable: [],
  id: null,
  name: null,
  workout: [],
};
const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses(state, action) {
      state.description = action.payload.description;
      state.directions = action.payload.directions;
      state.suitable = action.payload.suitable;
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.workout = action.payload.workout;
    },
    
  },
  
});


export const { setCourses } = coursesSlice.actions;
console.log(setCourses())
export default coursesSlice.reducer; */

import { createSlice, createAction } from '@reduxjs/toolkit';
import { fetchCoursesByCourseId } from '../../api/api';

const initialState = {
  courses: [],
  courseId: [],
  selectedCourse: null,
  loading: false,
  error: null,
};

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    selectCourse: (state, action) => ({
      ...state,
      selectedCourse: action.payload,
    }),
    setSelectCourse: (state, action) => ({
      ...state,
      selectedCourse: action.payload,
    }),
    setCourses: (state, action) => ({
      ...state,
      courses: action.payload,
    }),
    setCourseId: (state, action) => ({
      ...state,
      courseId: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoursesByCourseId.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(fetchCoursesByCourseId.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        courses: action.payload,
      }))
      .addCase(fetchCoursesByCourseId.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));
  },
});

export const { selectCourse, setSelectedCourse, setCourses, setCourseId } =
  coursesSlice.actions;

export const selectSelectedCourse = (state) => state.courses.selectedCourse;
export const selectCourses = (state) => state.courses.courses;
export const selectLoading = (state) => state.courses.loading;
export const selectError = (state) => state.courses.error;
export const selectCourseId = createAction('mySlice/selectCourseId');
export default coursesSlice.reducer;
