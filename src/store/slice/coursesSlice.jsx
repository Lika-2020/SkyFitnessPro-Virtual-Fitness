import { createSlice } from "@reduxjs/toolkit";
/* eslint-disable no-param-reassign */
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

export default coursesSlice.reducer;