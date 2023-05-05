import './style.css';

import { useSelector } from 'react-redux';
import { useDataBase } from '../../../api/apiFarbase';


function Navigation({ selectedWorkout, refURL }) {
  useDataBase(refURL);
 
  const name = useSelector((state) => state.name);
  console.log(name)
  
  return (
    <div className="container">
      <span className="span">{name}</span>
      <nav className="nav">
        {selectedWorkout && (
          <span>{`${selectedWorkout.heading}/${selectedWorkout.day}`}</span>
        )}
      </nav>
    </div>
  );
}

export default Navigation;
