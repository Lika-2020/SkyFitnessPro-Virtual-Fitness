
import './style.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoursesByCourseId } from '../../../api/api';

/* function Navigation({selectedWorkout}) {

  return (
    <div className="container">
      <span className="span">{selectedWorkout.name}</span>
      <nav className="nav">
   
      {selectedWorkout && (
          <span>{`${selectedWorkout.heading}/${selectedWorkout.day}`}</span>
        )}
      </nav>
    </div>
  );
}

export default Navigation; */

function Navigation({ selectedWorkout }) {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.courses);
  const [currentCourse, setCurrentCourse] = useState(null);
  
  useEffect(() => {
    if (selectedWorkout) {
      dispatch(fetchCoursesByCourseId(selectedWorkout.courses.id));
    }
  }, [selectedWorkout, dispatch]);
  
  useEffect(() => {
    if (courses.length > 0) {
      const foundCourse = courses.find(course => course.id === selectedWorkout.course.id);
      setCurrentCourse(foundCourse);
    }
  }, [selectedWorkout.course.id, courses]);
  
  const courseName = currentCourse ? currentCourse.name : '';
  
  return (
    <div className="container">
      <span className="span">{courseName}</span>
      <nav className="nav">
        {selectedWorkout && (
          <span>{`${selectedWorkout.heading}/${selectedWorkout.day}`}</span>
        )}
      </nav>
    </div>
  );
}

export default Navigation;
