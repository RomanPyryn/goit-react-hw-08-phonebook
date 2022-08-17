import Phonebook from '../Phonebook';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <>
      <Phonebook />
      <ToastContainer position="top-center" autoClose={3000} theme="dark" />
    </>
  );
};
