import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home/index';
import { Projects } from './pages/Projects/index';
import { ProjectInfo } from './pages/Projects/Project/index';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />      
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/Project" element={<ProjectInfo />} />
      </Routes>
    </BrowserRouter>
   );
}

export default App;
