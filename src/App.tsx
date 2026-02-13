import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Home_JP from './components/Home_JP';
import ChristmasTree3D from './components/ChristmasTree3D';

// Detect if running on GitHub Pages
const basename = window.location.hostname === 'nguyentrungnghia1802.github.io' 
  ? '/Christmas-Tree' 
  : '/';

function App() {
  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/christmas-tree" element={<ChristmasTree3D />} />
        <Route path="/jp" element={<Home_JP />} />
        <Route path="/jp/christmas-tree" element={<ChristmasTree3D />} />
      </Routes>
    </Router>
  );
}

export default App
