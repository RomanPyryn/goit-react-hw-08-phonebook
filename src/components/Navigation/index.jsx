import { NavLink } from 'react-router-dom';
import UserMenu from 'components/UserMenu';
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
        <UserMenu />
      )}
    </NavBox>
  );
};

export default Navigation;
