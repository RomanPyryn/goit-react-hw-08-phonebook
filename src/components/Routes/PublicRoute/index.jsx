import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function PublicRoute({ children, restricted = false }) {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const shouldNavigate = isLoggedIn && restricted;
  return <>{shouldNavigate ? <Navigate to="/" replace={true} /> : children}</>;
}
