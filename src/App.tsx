import { Routes, Route } from 'react-router-dom';
import MarsRover from './pages/MarsRover';
import Home from './pages/Home';
import DaysPicture from './pages/DaysPicture';
import Layout from './pages/Layout';

function App() {
  return (
    <Routes>
      <Route element={<Layout/>}>
      <Route path="/" element={<Home />} />
      <Route path="/mars" element={<MarsRover />} />
      <Route path="/picture" element={<DaysPicture />} />
       </Route>
    </Routes>
  );
}

export default App;
