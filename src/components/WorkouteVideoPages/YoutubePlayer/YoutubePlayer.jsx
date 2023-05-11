// import { useEffect } from 'react';
import YouTube from 'react-youtube';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchVideo } from '../../../store/slice/videoSlice';

function YoutubePlayer(props) {
  /* const { id } = props;
  const dispatch = useDispatch();
  const videoData = useSelector((state) => state.video.data); */


  const opts = {
    height: '639',
    width: '1160',
    playerVars: {
      autoplay: 1,
    },
  };

 const  {videoId}  = props;
console.log(videoId)
  return (
    <div>
      <YouTube opts={opts} videoId={videoId} />
    </div>
  );
}

export default YoutubePlayer;
