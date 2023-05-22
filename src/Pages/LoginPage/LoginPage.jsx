
import './style.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from "../../store/slice/userSlice";
import Logo from '../../images/logo.png';
import ButtonLoginEnter from '../../components/Buttons/ButtonLoginEnter/ButtonLoginEnter';
import ButtonsRegisterWhite from '../../components/Buttons/ButtonsRegisterWhite/ButtonsRegisterWhite';
import getError from "../../data/authErrors";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const [isClick, setIsClick] = useState('false');

  localStorage.getItem('login', email);
  localStorage.getItem('pass', pass);
  console.log(email, pass);

  const handleLogin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, pass)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate('/my-profile');
      })

      .catch((err) => {
        console.log(err.message);
        setError(err.message);
        setIsClick(!!err.message);
      });
  };
  return (
    <div className="container">
      <div className="wrapper">
        <div className="form">
          <img className="logo" src={Logo} alt="logo" />
          <input className="input" placeholder="Email" type="email"    value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
            setIsClick("false");
          }} />
          <input className="input" placeholder="Пароль" type="password"   value={pass}
          onChange={(e) => {
            setPass(e.target.value);
            setError("");
            setIsClick("false");
          }}/>
          <div className='error-block'>
            <span className='error'>  {getError(error, isClick)}</span>
        
          </div>
          <div className="button__wrapper">
            <ButtonLoginEnter onClick={handleLogin} />
            <Link to="/registration">
            <ButtonsRegisterWhite />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
