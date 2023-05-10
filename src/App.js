import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Pages/MainPage/MainPage';
import YogaPage from './Pages/DescriptionPages/YogaDescriptionPage';
import StretchingPage from './Pages/DescriptionPages/StretchingDescriptionPage';
import DanceFitness from './Pages/DescriptionPages/DanceFitnessDescriptionPage';
import StepAerobic from './Pages/DescriptionPages/StepaerobicDescriptionPage';
import Bodyflex from './Pages/DescriptionPages/BodyflexDescriptionPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/yoga" element={<YogaPage />} />
        <Route path="/stretching" element={<StretchingPage />} />
        <Route path="/dancefitness" element={<DanceFitness />} />
        <Route path="/stepaerobic" element={<StepAerobic />} />
        <Route path="/bodyflex" element={<Bodyflex />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
