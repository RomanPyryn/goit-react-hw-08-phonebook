import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Layout = lazy(() => import('components/Layout'));
const Loader = lazy(() => import('components/Loader'));
const Phonebook = lazy(() => import('components/Phonebook'));
const LogIn = lazy(() => import('../../views/LogIn'));
const Registration = lazy(() => import('../../views/Registration'));
const NotFound = lazy(() => import('components/NotFound'));

// import Phonebook from '../Phonebook';

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Phonebook />} />
          <Route path="log-in" element={<LogIn />} />
          <Route path="registration" element={<Registration />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
