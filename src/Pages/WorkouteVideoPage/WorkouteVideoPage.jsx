import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from '../../components/WorkouteVideoPages/Header/Header';
import Navigation from '../../components/WorkouteVideoPages/Navigation/Navigation';
import YoutubePlayer from '../../components/WorkouteVideoPages/YoutubePlayer/YoutubePlayer';
import Exercises from '../../components/WorkouteVideoPages/Exercises/Exercises';
import ProgressCounted from '../../components/WorkouteVideoPages/ProgressCounted/ProgressCounted';
import {
  selectSelectedWorkout,
  selectError,
  setSelectedWorkout,
} from '../../store/slice/workoutSlice';

import { fetchWorkouts } from '../../api/api';

import './style.css';

function WorkouteVideoPage() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchWorkouts());
  }, [dispatch]);

  const selectedWorkout = useSelector(selectSelectedWorkout);
  const error = useSelector(selectError);

  useEffect(() => {
    if (id && selectedWorkout?.id !== id) {
      dispatch(setSelectedWorkout(id));
    }
  }, [id, selectedWorkout, dispatch]);

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <Navigation selectedWorkout={selectedWorkout} />
        <YoutubePlayer url={selectedWorkout?.video} />

        <div className="progress-exercises">
          <Exercises exercises={selectedWorkout?.exercises} />
          <ProgressCounted />
        </div>
      </div>
    </div>
  );
}

export default WorkouteVideoPage;
