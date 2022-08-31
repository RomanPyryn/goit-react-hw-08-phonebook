// import { NavLink } from 'react-router-dom';
import UserMenu from 'components/UserMenu';
import { NavBox, NavHeader, NavigationLink } from './Navigation.styled';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <NavBox>
      <NavHeader>Phonebook</NavHeader>
      {!isLoggedIn ? (
        <nav>
          <NavigationLink to="register" className={'link'}>
            Registration
          </NavigationLink>
          <NavigationLink to="login" className={'link'}>
            Login
          </NavigationLink>
        </nav>
      ) : (
        <UserMenu />
      )}
    </NavBox>
  );
};

export default Navigation;
