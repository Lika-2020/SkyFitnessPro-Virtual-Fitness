import YouTube from 'react-youtube';

function YoutubePlayer() {

  const opts = {
    height: '639',
    width: '1160',
    playerVars: {
      autoplay: 1,
    },
  };

  const videoId = 'oqe98Dxivns';

  return (
    <div className='yuotube'>
      <YouTube opts={opts} videoId={videoId} />
    </div>
  );
}

export default YoutubePlayer;
