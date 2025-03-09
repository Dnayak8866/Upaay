import { useRef } from "react";

const BackgroundVideo = () => {
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0; // Restart video
        videoRef.current.play(); // Play again
      }
    }, 3000); // 3 seconds delay before replay
  };

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      playsInline
      onEnded={handleVideoEnd}
      className="position-fixed top-0 start-0 w-100 h-100 object-fit-cover z-n1"
    >
      <source src="/bg.mp4" type="video/mp4" />
    </video>
  );
};

export default BackgroundVideo;
