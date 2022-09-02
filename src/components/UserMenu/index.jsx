import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { TailSpin } from 'react-loader-spinner';
import { logoutUser } from '../../redux/authApi';
import { UserBox, LogoutBtn, UserName, SpinerBox } from './UserMenu.styled';

const User = () => {
  const { user, isLoggedIn, isLoading } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleLogOut = async () => {
    await dispatch(logoutUser());
    toast.success(`See you soon, "${user.name}"!`);

    if (!isLoggedIn) {
      toast.success(`See you soon, "${user.name}"!`);
    }
  };

  return (
    <UserBox>
      <img
        src="https://img.icons8.com/plasticine/2x/homer-simpson.png"
        alt="contact-icon"
        width="30px"
        height="30px"
      />
      <UserName>{user.name}</UserName>
      <LogoutBtn type="button" onClick={handleLogOut} disabled={isLoading}>
        {isLoading ? (
          <SpinerBox>
            <TailSpin color="#000" height={16} width={16} />
          </SpinerBox>
        ) : (
          'Logout'
        )}
      </LogoutBtn>
    </UserBox>
  );
};

export default User;
