import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Pages/MainPage/MainPage';
import YogaPage from './Pages/DescriptionPages/YogaDescriptionPage';
import StretchingPage from './Pages/DescriptionPages/StretchingDescriptionPage';
import DanceFitness from './Pages/DescriptionPages/DanceFitnessDescriptionPage';
import StepAerobic from './Pages/DescriptionPages/StepaerobicDescriptionPage';
import Bodyflex from './Pages/DescriptionPages/BodyflexDescriptionPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import AppRoutes from './Pages/Routes/routes';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/yoga" element={<YogaPage />} />
        <Route path="/stretching" element={<StretchingPage />} />
        <Route path="/dancefitness" element={<DanceFitness />} />
        <Route path="/stepaerobic" element={<StepAerobic />} />
        <Route path="/bodyflex" element={<Bodyflex />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
