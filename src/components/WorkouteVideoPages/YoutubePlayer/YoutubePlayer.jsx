import YouTube from 'react-youtube';

function YoutubePlayer() {
  const videoId = 'oqe98Dxivns';

  return (
    <div className='yuotube'>
      <YouTube width={1160} height={639} videoId={videoId} />
    </div>
  );
}

export default YoutubePlayer;
