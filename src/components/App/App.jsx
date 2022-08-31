import { useEffect } from 'react';
import { lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import PublicRoute from 'components/Routes/PublicRoute';
import PrivateRoute from 'components/Routes/PrivateRoute';
import { getUser } from '../../redux/authApi';

const Layout = lazy(() => import('components/Layout'));
// const Loader = lazy(() => import('components/Loader'));
const Contacts = lazy(() => import('components/Phonebook'));
const LogIn = lazy(() => import('../../views/LogIn.jsx'));
const Register = lazy(() => import('../../views/Register.jsx'));
const NotFound = lazy(() => import('components/NotFound'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <Suspense>
      {/* fallback={<Loader />} */}
      <Routes>
        <Route path="/" element={<PublicRoute>
                <Layout />
              </PublicRoute>}>
          <Route
            index
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute restricted>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute restricted>
                <LogIn />
              </PublicRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
