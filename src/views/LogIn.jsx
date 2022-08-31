import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/authApi';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
    setEmail('');
    setPassword('');
  };
  return (
    <>
      <h1>Log in</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Log in</button>
      </form>
    </>
  );
};

export default Login;
