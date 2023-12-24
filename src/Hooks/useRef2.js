
export const VideoPlayer = ({ videoSource }) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
  
  
    const handlePlayButtonClick = (event) => {
        // Stop the propagation of the click event to prevent it from reaching the container
        event.stopPropagation();
        
        // Handle play/pause logic
        handleVideoClick();
      };
      const handleVideoClick = () => {
        const video = videoRef.current;
        if (video) {
          if (video.paused || video.ended) {
            video.play();
            setIsPlaying(true)
          } else {
            video.pause();
            setIsPlaying(false)

          }
        }
      };
    return (
      <div className="video-container"    onClick={()=>handleVideoClick()}>
        <video
          ref={videoRef}
          style={{ height: '400px' }}
          src={videoSource}
          className="profile_cover_img"
        ></video>
        <div
          className={`play-button ${isPlaying ? 'hidden' : ''}`}
          onClick={(e)=>handlePlayButtonClick(e)}
        ></div>
      </div>
    );
  };
  