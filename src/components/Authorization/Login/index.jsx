import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TailSpin } from 'react-loader-spinner';
import { loginUser } from '../../../redux/authApi';
import {
  AuthBox,
  AuthHeader,
  AuthForm,
  AuthLabel,
  AuthInput,
  AuthBtn,
  SpinerBox,
} from '../Authorization.styled';

function Login() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(state => state.auth);
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
        <AuthBtn type="submit" disabled={isLoading}>
          {isLoading ? (
            <SpinerBox>
              <TailSpin color="#007bcd" height={16} width={16} />
            </SpinerBox>
          ) : (
            'Login'
          )}
        </AuthBtn>
      </AuthForm>
    </AuthBox>
  );
}

export default Login;
