import Header from '../../components/WorkouteVideoPages/Header/Header';
import Navigation from '../../components/WorkouteVideoPages/Navigation/Navigation';
import YoutubePlayer from '../../components/WorkouteVideoPages/YoutubePlayer/YoutubePlayer';
import Exercises from '../../components/WorkouteVideoPages/Exercises/Exercises';
import ProgressCounted from '../../components/WorkouteVideoPages/ProgressCounted/ProgressCounted';
import './style.css';

function WorkouteVideoPage() {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <Navigation />
        <YoutubePlayer />
        <div className="progress-exercises">
          <Exercises />
          <ProgressCounted />
        </div>
      </div>
    </div>
  );
}

export default WorkouteVideoPage;
