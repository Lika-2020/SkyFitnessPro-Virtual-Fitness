import { createAsyncThunk } from '@reduxjs/toolkit';
import { ref, child, get } from 'firebase/database';

import db from '../database/db';

export const fetchWorkouts = createAsyncThunk('workout/fetchWorkouts', async () => {
  const dbRef = ref(db);

  const response = await get(child(dbRef, `workouts`));
 
  const workouts = Object.values(response.val());

  return workouts;
});




export const fetchCoursesByCourseId = (id) => async (dispatch) => {
  try {
    // Отправляем запрос на сервер, чтобы получить курс по его ID
    const dbRef = ref(db);
    const courseSnapshot = await get(child(dbRef, `courses/${id}`));

    // Преобразуем данные снэпшота в объект курса
    const course = courseSnapshot.val();
    const coursesArray = Object.values(course);

    // Диспатчим действие, чтобы сохранить полученный курс в стор
    dispatch({ type: 'FETCH_COURSES_SUCCESS', payload: coursesArray });
  } catch (error) {
    // Обрабатываем ошибку, если она произошла
    dispatch({ type: 'FETCH_COURSES_ERROR', payload: error.message });
  }
};







