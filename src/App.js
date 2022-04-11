import "./App.css";
import "./index.css";
import { Box } from "@mui/system";
import ReactPlayer from "react-player";
import Toolbar from "./component/Toolbar";
import MessageStack from "./component/MessageStack";
import { useState } from "react";
import { videoUrls } from "./common";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { resultUrls } from "./common.js";

function App() {
  const [result, setResult] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box className="main">
      <Dialog fullWidth={true} maxWidth={"xl"} open={open}>
        <DialogTitle id="alert-dialog-title">
          {result === resultUrls.bias ? "偏差估计" : "旋转显示"}
        </DialogTitle>
        <DialogContent className="dialogContent">
          <ReactPlayer
            className="player"
            url="videos/video0.mp4"
            controls
            height={300}
          ></ReactPlayer>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            关闭
          </Button>
        </DialogActions>
      </Dialog>

      <Box className="title">冰壶辅助训练系统</Box>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <MessageStack></MessageStack>
        <Box className="content">
          <Toolbar setResult={setResult} setOpen={setOpen}></Toolbar>
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
          style={{ display: `${result ? "block" : "none"}`, maxWidth: "100%" }}
          src={result}
          alt="resultImage"
        ></img>
      </Box>
    </Box>
  );
}

export default App;
