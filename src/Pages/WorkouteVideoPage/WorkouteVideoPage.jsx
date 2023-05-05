import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/WorkouteVideoPages/Header/Header';
import Navigation from '../../components/WorkouteVideoPages/Navigation/Navigation';
import YoutubePlayer from '../../components/WorkouteVideoPages/YoutubePlayer/YoutubePlayer';
import Exercises from '../../components/WorkouteVideoPages/Exercises/Exercises';
import ProgressCounted from '../../components/WorkouteVideoPages/ProgressCounted/ProgressCounted';
import {
  selectSelectedWorkout,

} from '../../store/slice/workoutsSlice';

import { fetchWorkouts } from '../../api/api';

import './style.css';

function WorkouteVideoPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWorkouts());
  }, [dispatch]);

  const selectedWorkout = useSelector(selectSelectedWorkout);


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
