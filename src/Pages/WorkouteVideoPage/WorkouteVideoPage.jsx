import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/WorkouteVideoPages/Header/Header';
import Navigation from '../../components/WorkouteVideoPages/Navigation/Navigation';
import YoutubePlayer from '../../components/WorkouteVideoPages/YoutubePlayer/YoutubePlayer';
import Exercises from '../../components/WorkouteVideoPages/Exercises/Exercises';
import ProgressCounted from '../../components/WorkouteVideoPages/ProgressCounted/ProgressCounted';
import {
  setLoading,
  selectSelectedWorkout,
} from '../../store/slice/workoutsSlice';

import {
  setExercises,
 selectExercises,
} from '../../store/slice/exercisesSlice';

import {
  fetchWorkouts,
  fetchCoursesByCourseId,
 fetchExercises,
} from '../../api/api';

import './style.css';

function WorkouteVideoPage({ selectedCourse}) {
  const dispatch = useDispatch();

  const selectedWorkout = useSelector(selectSelectedWorkout);
 let exercises = useSelector(selectExercises);

  console.log(selectSelectedWorkout);

  useEffect(() => {
    dispatch(fetchWorkouts());
  }, [dispatch]);

  useEffect(() => {
    if (selectedWorkout && selectedWorkout.courseId) {
      dispatch(fetchCoursesByCourseId(selectedWorkout.courseId));
    }
  }, [dispatch, selectedWorkout]);

   useEffect(() => {
    dispatch(setLoading(true));

    try {
      const storedExercises = localStorage.getItem('exercises');

      if (storedExercises) {
        exercises = JSON.parse(storedExercises);
      } else {
        exercises = fetchExercises();
        localStorage.setItem('exercises', JSON.stringify(exercises));
      }

      dispatch(setExercises(exercises));
    } catch (error) {
      console.log('Ошибка при обновлении');
    } finally {
      setLoading(false); // Установка состояния загрузки в false после завершения загрузки
    }

    dispatch(setLoading(false));
  }, [dispatch]); 

  return (
    <div className="wrappers">
      <div className="container">
        <Header />
        <Navigation
          selectedWorkout={selectedWorkout}
          selectedCourse={selectedCourse}
        />
        <YoutubePlayer videoId={selectedWorkout?.video} />

        <div className="progress-exercises">
          {selectedWorkout?.exercises ? (
            <Exercises  exercises={selectedWorkout?.exercises} />
          ) : (
            <p className="no-exercises">
              Нет данных об упражнениях <br /> для этой тренировки.
            </p>
          )}
          <ProgressCounted exercises={selectedWorkout?.exercises} />
        </div>
      </div>
    </div>
  );
}

export default WorkouteVideoPage;
