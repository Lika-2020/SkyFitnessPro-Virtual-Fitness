/* import { createSlice } from '@reduxjs/toolkit';
import { fetchCoursesByCourseId } from '../../api/api'; */

/* const initialState = {
  courses: [],
  selectedCourses: null,
  loading: false,
  error: null,
};



const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    selectCourses: (state, action) => ({
      ...state,
      selectedCourses: action.payload,
    }),
    setSelectedCourses: (state, action) => ({
      ...state,
      selectedCourses: action.payload,
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

export const { selectCourse, setSelectedCourse } = coursesSlice.actions;

export const selectSelectedCourse = (state) => state.courses.selectedCourse;
export const selectCourses = (state) => state.courses.courses;
export const selectLoading = (state) => state.courses.loading;
export const selectError = (state) => state.courses.error;

export default coursesSlice.reducer; */

const initialState = {
  courses: [],
};

const coursesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'FETCH_COURSES_SUCCESS':
      return { ...state, courses: action.payload };
    case 'FETCH_COURSES_ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default coursesReducer;
