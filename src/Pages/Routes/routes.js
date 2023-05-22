import { Route, Routes } from 'react-router-dom';
import SelectWorkout from '../SelectWorkout/SelectWorkout';
import WorkouteVideoPage from '../WorkouteVideoPage/WorkouteVideoPage';
import MainPage from '../MainPage/MainPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import LoginPage from '../LoginPage/LoginPage';
import ProgressPage from '../ProgressPage/ProgressPage';
import ProgressCountedPage from '../ProgressCountedPage/ProgressCountedPage';
import MyProfilePage from '../MyProfilePage/MyProfilePage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/registration" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/select-workouts" element={<SelectWorkout />} />
      <Route path="/workoutVideo" element={<WorkouteVideoPage />} />
      <Route path="/progress" element={<ProgressPage />} />
      <Route path="/progress-ok" element={<ProgressCountedPage />} />
      <Route path="/my-profile" element={<MyProfilePage />} />
    </Routes>
  );
}

export default AppRoutes;
