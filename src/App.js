import "./App.css";
import { Box } from "@mui/system";
import ReactPlayer from "react-player";
import FolderCopyOutlinedIcon from "@mui/icons-material/FolderCopyOutlined";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import ImageIcon from "@mui/icons-material/Image";
import MyIconButton from "./component/MyIconButton";
import VideoFileOutlinedIcon from "@mui/icons-material/VideoFileOutlined";
import FitScreenOutlinedIcon from "@mui/icons-material/FitScreenOutlined";
import AspectRatioOutlinedIcon from "@mui/icons-material/AspectRatioOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import Sidebar from "./component/Sidebar";

const urls = [
  "videos/video3.mp4",
  "videos/video0.mp4",
  "videos/video2.mp4",
  "videos/video1.mp4",
];

const toolBar = [
  {
    icon: <FolderCopyOutlinedIcon fontSize="large" />,
    text: "打开新序列",
    _onClick: () => {},
  },
  {
    icon: <PlayCircleOutlineIcon fontSize="large" />,
    text: "开始",
    _onClick: () => {},
  },
  {
    icon: <ImageIcon fontSize="large" />,
    text: "图片",
    _onClick: () => {},
  },
  {
    icon: <VideoFileOutlinedIcon fontSize="large" />,
    text: "AVI",
    _onClick: () => {},
  },
  {
    icon: <FitScreenOutlinedIcon fontSize="large" />,
    text: "适应大小",
    _onClick: () => {},
  },
  {
    icon: <AspectRatioOutlinedIcon fontSize="large" />,
    text: "原始大小",
    _onClick: () => {},
  },
  {
    icon: <AccessTimeOutlinedIcon fontSize="large" />,
    text: "时间校准",
    _onClick: () => {},
  },
];

function App() {
  return (
    <Box className="main">
      <Box className="toolBar">
        {toolBar.map((item, index) => (
          <MyIconButton
            key={`toolBar_${index}`}
            _onClick={item._onClick}
            icon={item.icon}
            text={item.text}
          ></MyIconButton>
        ))}
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box>
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
        <Sidebar></Sidebar>
      </Box>
    </Box>
  );
}

export default App;
