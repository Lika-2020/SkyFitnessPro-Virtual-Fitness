import { Route, Routes } from 'react-router-dom';
import SelectWorkout from '../SelectWorkout/SelectWorkout';
import WorkouteVideoPage from '../WorkouteVideoPage/WorkouteVideoPage';
import MainPage from '../MainPage/MainPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import LoginPage from '../LoginPage/LoginPage';
import ProgressPage from '../ProgressPage/ProgressPage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/registration" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/select-workouts" element={<SelectWorkout />} />
      <Route path="/workoutVideo" element={<WorkouteVideoPage />} />
      <Route path="/progress" element={<ProgressPage />} />
    </Routes>
  );
}

export default AppRoutes;
