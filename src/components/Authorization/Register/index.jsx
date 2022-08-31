import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../../../redux/authApi';
import { AuthBox, AuthHeader, AuthForm, AuthLabel, AuthInput, AuthBtn } from '../Authorization.styled';

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
    <AuthBox>
      <AuthHeader>Registration</AuthHeader>

      <AuthForm onSubmit={handleSubmit} autoComplete="off" >
        <AuthLabel htmlFor="">
          Name
          <AuthInput type="text" name="name" value={name} onChange={handleChange} />
        </AuthLabel>
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
        <AuthBtn type="submit">Registration</AuthBtn>
      </AuthForm>
    </AuthBox>
  );
};

export default Register;
