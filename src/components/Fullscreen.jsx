import { useState } from "react";

const FullScreenButton = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);




  const handleFullScreen = () => {
    if (!isFullScreen) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();

      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();

      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
        
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }

    setIsFullScreen(!isFullScreen);
  };

  return (
    <button onClick={handleFullScreen}>
      {isFullScreen ? "Exit Full Screen" : "Go Full Screen "}
    </button>
  );
};

export default    FullScreenButton;
