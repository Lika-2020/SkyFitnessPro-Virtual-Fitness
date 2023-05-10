import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCoursesByCourseId } from '../../../api/api';

function Navigation({ selectedWorkout }) {
  const courses = useSelector((state) => state.courses.courses);
  console.log(courses)
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedWorkout) {
      dispatch(fetchCoursesByCourseId());
    }
  }, [dispatch, selectedWorkout]);

 

  return (
    <div className="container">
      <h1>{selectedWorkout?.name}</h1>
      <span className="span">{courses.name}</span>
      <nav className="nav">
        {selectedWorkout && (
          <span>
            {selectedWorkout.heading && selectedWorkout.day
              ? `${selectedWorkout.heading}/${selectedWorkout.day}`
              : ''}
          </span>
        )}
      </nav>
    </div>
  );
}

export default Navigation;
