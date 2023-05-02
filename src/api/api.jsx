import { createAsyncThunk } from '@reduxjs/toolkit';
import db from '../database/db';

const fetchWorkouts = createAsyncThunk('workout/fetchWorkouts', async () => {
  const response = await db.ref('workouts').once('value');

  const workouts = Object.values(response.val());


  response.forEach((childSnapshot) => {
    const workout = childSnapshot.val();
    workouts.push(workout);
  });



  return workouts;
});

export default fetchWorkouts;
