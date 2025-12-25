import {useRef} from "react";

function VideoPlayer(){
    const videoRef=useRef(null);

const handlePlay = () => {
    videoRef.current.play();
};
const handlePause = () => {
    videoRef.current.pause();
};
const handleForward = () => {
    videoRef.current.currentTime += 5;
};
const handleRewind = () => {
    videoRef.current.currentTime -= 5;
};
 
return(
    <div style={{ textAlign:"center", marginTop:"40px"}}>
        <video ref={videoRef} width="500" src="https://www.w3schools.com/html/mov_bbb.mp4"/>
        <div style={{ marginTop:"20px"}}>
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
            <button onClick={handleForward}>Forward 5s</button>
            <button onClick={handleRewind}>Rewind 5s</button>
        </div>
         </div>
);
}
export default VideoPlayer;