import ButtonProgress from '../../Buttons/ButtonProgress/ButtonProgress';
import './style.css';

function Exercises() {
  return (
    <div className='block__exercises'> 
        <span className='title'>Упражнения</span>
      <ul className='ul'>
        <li>Наклон вперед (10 повторений)</li>
        <li> Наклон назад (10 повторений)</li>
        <li>Поднятие ног, согнутых в коленях <br /> (5 повторений)</li>
      </ul>

      <ButtonProgress />
    </div>
  );
}

export default Exercises;
