
import { useNavigate } from 'react-router-dom';
import ButtonProgress from '../../Buttons/ButtonProgress/ButtonProgress';
 
import './style.css';

function Exercises({ exercises }) {
 
  console.log(exercises);

  const navigate = useNavigate();

  const handleProgressClick = () => {
    const progressData = {
       exercises, 
    };
    navigate('/progress', { state: progressData });
  }

  

  

  if (!exercises) {
    return null; // Ничего не выводим, если нет данных
  }

  return (
    <div className="block__exercises">
      <span className="title-exercises">Упражнения</span>

      <ul className="ul">
        {exercises.map((exercise) => (
          <li key={exercise.id}>{exercise}</li>
        ))}
      </ul>
      <ButtonProgress onClick={handleProgressClick} />
    </div>
  );
}

export default Exercises;
