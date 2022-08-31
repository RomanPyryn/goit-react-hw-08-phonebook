import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../redux/authApi';
import { AuthBox, AuthHeader, AuthForm, AuthLabel, AuthInput, AuthBtn } from '../Authorization.styled';

function Login() {
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
    <AuthBox>
      <AuthHeader>Login</AuthHeader>
      <AuthForm onSubmit={handleSubmit}>
        <AuthLabel htmlFor="">
          Email
          <AuthInput
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </AuthLabel>
        <AuthLabel htmlFor="">
          Password
          <AuthInput
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </AuthLabel>
        <AuthBtn type="submit">Login</AuthBtn>
      </AuthForm>
    </AuthBox>
  );
};

export default Login;