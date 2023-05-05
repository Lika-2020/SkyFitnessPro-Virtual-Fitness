import { Route,  Routes } from 'react-router-dom';
import SelectWorkout from '../SelectWorkout/SelectWorkout';
import WorkouteVideoPage from '../WorkouteVideoPage/WorkouteVideoPage';
import MainPage from '../MainPage/MainPage';



function AppRoutes() {
  return (
    <Routes>
  <Route  path="/" element={ <MainPage/>} />
  <Route  path="/select-workouts" element={<SelectWorkout/>} />
  <Route path="/workout/:heading/:day" element={<WorkouteVideoPage />} />

</Routes>

  )
}

export default AppRoutes