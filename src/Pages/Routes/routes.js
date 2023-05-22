import { Route, Routes } from 'react-router-dom';
import SelectWorkout from '../SelectWorkout/SelectWorkout';
import WorkouteVideoPage from '../WorkouteVideoPage/WorkouteVideoPage';

import RegisterPage from '../RegisterPage/RegisterPage';

import ProgressPage from '../ProgressPage/ProgressPage';
import ProgressCountedPage from '../ProgressCountedPage/ProgressCountedPage';
import MyProfilePage from '../MyProfilePage/MyProfilePage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/registration" element={<RegisterPage />} />

      <Route path="/select-workouts/:id" element={<SelectWorkout />} />
      <Route path="/workoutVideo" element={<WorkouteVideoPage />} />
      <Route path="/progress" element={<ProgressPage />} />
      <Route path="/progress-ok" element={<ProgressCountedPage />} />
      <Route path="/my-profile" element={<MyProfilePage />} />
    </Routes>
  );
}

export default AppRoutes;
