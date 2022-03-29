import "./App.css";
import { Box } from "@mui/system";
import ReactPlayer from "react-player";

const urls = [
  "videos/video3.mp4",
  "videos/video0.mp4",
  "videos/video2.mp4",
  "videos/video1.mp4",
];

function App() {
  return (
    <Box className="main">
      {[0, 1].map((i) => (
        <Box key={i} className="rowVideo">
          {[0, 1].map((j) => (
            <ReactPlayer
              className="player"
              key={`player${j}`}
              url={urls[i * 2 + j]}
              controls
            ></ReactPlayer>
          ))}
        </Box>
      ))}
    </Box>
  );
}

export default App;
