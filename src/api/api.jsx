import { createAsyncThunk } from '@reduxjs/toolkit';
import { ref, child, get } from 'firebase/database';

import db from '../database/db';

export const fetchWorkouts = createAsyncThunk(
  'workout/fetchWorkouts',
  async () => {
    const dbRef = ref(db);

    const response = await get(child(dbRef, `workouts`));

    const workouts = Object.values(response.val());

    return workouts;
  }
);

 export const fetchCoursesByCourseId = createAsyncThunk('course/fetchCoursesByCourseId', async () => {
  

    const dbRef = ref(db);
    const courseSnapshot = await get(child(dbRef, `courses`));

    // Преобразуем данные снэпшота в объект курса
  
    const courses = Object.values(courseSnapshot.val());


    return courses;
}); 

