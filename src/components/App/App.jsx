import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Layout = lazy(() => import('components/Layout'));
// const Loader = lazy(() => import('components/Loader'));
const Phonebook = lazy(() => import('components/Phonebook'));
const Login = lazy(() => import('../../views/Login'));
const Register = lazy(() => import('../../views/Register'));
const NotFound = lazy(() => import('components/NotFound'));

export const App = () => {
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
