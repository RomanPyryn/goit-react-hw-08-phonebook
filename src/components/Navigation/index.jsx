import { NavLink } from 'react-router-dom';
import User from 'components/User';
import { NavBox, NavLinksBox } from './Navigation.styled';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <NavBox>
      <p>Phonebook</p>
      {!isLoggedIn ? (
        <NavLinksBox>
          <NavLink to="register" className={'link'}>
            Registration
          </NavLink>
          <NavLink to="login" className={'link'}>
            Log in
          </NavLink>
        </NavLinksBox>
      ) : (
        <User />
      )}
    </NavBox>
  );
};

export default Navigation;
