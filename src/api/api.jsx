import { createAsyncThunk } from '@reduxjs/toolkit';
import { ref, child, get } from 'firebase/database';
import db from '../database/db';

const fetchWorkouts = createAsyncThunk('workout/fetchWorkouts', async () => {
  const dbRef = ref(db);

  const response = await get(child(dbRef, `workouts`));

  const workouts = Object.values(response.val());

  return workouts;
});

export default fetchWorkouts;
