import { useSelector } from 'react-redux';

function useAuth() {
  const { email, token, id, username } = useSelector((state) => state.user);
  return {
    isAuth: !!email,
    email,
    token,
    id,
    username,
  };
}
export default useAuth;