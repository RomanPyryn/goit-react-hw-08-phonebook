import { useSelector } from 'react-redux';
import { UserBox } from './User.styled';

const User = () => {
  const user = useSelector(state => state.auth.user.name);

  return (
    <UserBox>
          <p>{user}</p>
          <button>Exit</button>
    </UserBox>
  );
};

export default User;