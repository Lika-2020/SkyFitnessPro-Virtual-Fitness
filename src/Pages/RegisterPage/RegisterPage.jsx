/* eslint-disable import/no-extraneous-dependencies */
import './style.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAuth, createUserWithEmailAndPassword } from '@firebase/auth';
import { useNavigate } from 'react-router-dom';
import Logo from '../../images/logo.png';
import ButtonRegister from '../../components/Buttons/ButtonRegister/ButtonRegister';
import getError from '../../data/authErrors';
import { setUser } from '../../store/slice/userSlice';

function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const [isClick, setIsClick] = useState('false');
  localStorage.setItem('login', email);
  localStorage.setItem('pass', pass);

  const handleLogin = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, pass)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate('/login');
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
          <input className="input" placeholder="Email" type="email"  value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
            setIsClick("false");
          }} />
          <input className="input" placeholder="Пароль" type="password" value={pass}
          onChange={(e) => {
            setPass(e.target.value);
            setError("");
            setIsClick("false");
          }} />
          <input
            className="input"
            placeholder="Повторите пароль"
            type="password"
          />

          <div className='error-block'>
            <span className='error'>
            {getError(error, isClick)}
            </span>
          </div>
          <div className="button__wrapper">
            <ButtonRegister onClick={handleLogin} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
