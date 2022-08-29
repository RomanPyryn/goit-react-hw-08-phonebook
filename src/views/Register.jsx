import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/authApi';

const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(addUser({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <h1>Registration</h1>

      <form onSubmit={handleSubmit} autoComplete="off" >
        <label htmlFor="">
          Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
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
        <button type="submit">Registration</button>
      </form>
    </>
  );
};

export default Register;
