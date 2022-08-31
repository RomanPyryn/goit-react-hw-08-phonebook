import { useEffect } from 'react';
import { lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../redux/authApi';

const Layout = lazy(() => import('components/Layout'));
// const Loader = lazy(() => import('components/Loader'));
const Phonebook = lazy(() => import('components/Phonebook'));
const Login = lazy(() => import('../../views/Login.jsx'));
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
        <Route path="/" element={<Layout />}>
          <Route index element={<Phonebook />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
