import ButtonChangeLogin from './components/Buttons/ButtonChangeLogin/ButtonChangeLogin';
import ButtonChangePassword from './components/Buttons/ButtonChangePassword/ButtonChangePassword';
import ButtonLoginEnter from './components/Buttons/ButtonLoginEnter/ButtonLoginEnter';
import ButtonMainEnter from './components/Buttons/ButtonMainEnter/ButtonMainEnter';
import ButtonProgress from './components/Buttons/ButtonProgress/ButtonProgress';
import ButtonsRegister from './components/Buttons/ButtonRegister/ButtonRegister';
import ButtonSave from './components/Buttons/ButtonSave/ButtonSave';
import ButtonToSend from './components/Buttons/ButtonToSend/ButtonToSend';
import ButtonWrite from './components/Buttons/ButtonWrite/ButtonWrite';
import ButtonsRegisterWhite from './components/Buttons/ButtonsRegisterWhite/ButtonsRegisterWhite';

function App() {
  return (
    <div className="App">
      <header className="App-header" />
      <ButtonChangeLogin />
      <ButtonChangePassword />
      <ButtonLoginEnter />
      <ButtonMainEnter />
      <ButtonProgress />
      <ButtonsRegister />
      <ButtonSave />
      <ButtonsRegisterWhite />
      <ButtonToSend />
      <ButtonWrite />
    </div>
  );
}

export default App;
