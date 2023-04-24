import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import YoutubePlayer from '../YoutubePlayer/YoutubePlayer';
import Exercises from '../Exercises/Exercises';
import ProgressCounted from '../ProgressCounted/ProgressCounted';
import './style.css';

function WorckoutVideoPage() {
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

export default WorckoutVideoPage;
