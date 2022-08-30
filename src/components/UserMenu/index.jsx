import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { logoutUser } from '../../redux/authApi';
import { UserBox } from './UserMenu.styled';

const User = () => {
  const {user, isLoggedIn } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleLogOut = async () => { 
    await dispatch(logoutUser());
    toast.success(`See you soon, "${user.name}"!`);

    // if (!isLoggedIn) {
    //   toast.success(`See you soon, "${user.name}"!`);
    // }
  };

  return (
    <UserBox>
      <p>{user.name}</p>
      <button type="button" onClick={handleLogOut}>
        Exit
      </button>
    </UserBox>
  );
};

export default User;
