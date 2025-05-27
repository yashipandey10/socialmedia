import { Navigate, Outlet, useLocation } from 'react-router-dom';

function ProtectedRoute() {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  return isLoggedIn
    ? <Outlet />
    : <Navigate to="/loginpage" state={{ from: location.pathname }} replace />;
}

export default ProtectedRoute;
