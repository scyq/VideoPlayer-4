import "./App.css";
import "./index.css";
import { Box } from "@mui/system";
import ReactPlayer from "react-player";
import Toolbar from "./component/Toolbar";
import MessageStack from "./component/MessageStack";
import { useState } from "react";
import { videoUrls } from "./common";

function App() {
  const [result, setResult] = useState(null);

  return (
    <Box className="main">
      <Box className="title">冰壶辅助训练系统</Box>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <MessageStack></MessageStack>
        <Box className="content">
          <Toolbar setResult={setResult}></Toolbar>
          <Box>
            {[0, 1].map((i) => (
              <Box key={i} className="rowVideo">
                {[0, 1].map((j) => (
                  <ReactPlayer
                    className="player"
                    key={`player${j}`}
                    url={videoUrls[i * 2 + j]}
                    controls
                    height={300}
                  ></ReactPlayer>
                ))}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box className="border result">
        <img
          style={{ display: `${result ? "block" : "none"}` }}
          src={result}
          alt="resultImage"
        ></img>
      </Box>
    </Box>
  );
}

export default App;
