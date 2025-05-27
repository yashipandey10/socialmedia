import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Loginpage from './pages/Loginpage';
import NotFound from './pages/NotFound';
import Messaging from './pages/Messaging';
import Registerpage from './pages/Registerpage';
import ProtectedRoute from './utiles/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/messaging" element={<Messaging />} />
      </Route>
    <Route path="/loginpage" element={<Loginpage />} />
      <Route path="/registerpage" element={<Registerpage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App
