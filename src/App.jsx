import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GalleryPage from './pages/GalleryPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery/:slug" element={<GalleryPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
