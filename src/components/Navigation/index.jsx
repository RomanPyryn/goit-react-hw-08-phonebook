import { NavLink } from 'react-router-dom';
import User from 'components/User';
import { NavBox, NavLinksBox } from './Navigation.styled';

const Navigation = () => {
  return (
    <NavBox>
      <p>Phonebook</p>
      <NavLinksBox>
        <NavLink to="registration" className={'link'}>
          Registration
        </NavLink>
        <NavLink to="log-in" className={'link'}>
          Log in
        </NavLink>
      </NavLinksBox>
      <User />
    </NavBox>
  );
};

export default Navigation;
