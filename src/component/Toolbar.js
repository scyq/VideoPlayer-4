import VideoFileOutlinedIcon from "@mui/icons-material/VideoFileOutlined";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import CropRotateIcon from "@mui/icons-material/CropRotate";
import PercentOutlinedIcon from "@mui/icons-material/PercentOutlined";
import { Box } from "@mui/system";
import MyIconButton from "./MyIconButton";
import "./Toolbar.css";
import { useState } from "react";
import { resultUrls } from "../common";

function Toolbar(props) {
  const [toolBar, setToolBar] = useState([
    {
      icon: <VideoFileOutlinedIcon fontSize="large" />,
      text: "输入视频",
      _onClick: () => {},
    },
    {
      icon: <PlayCircleOutlineIcon fontSize="large" />,
      text: "轨迹生成",
      _onClick: () => {
        props.setResult(resultUrls.trackGeneration);
      },
    },
    {
      icon: <CropRotateIcon fontSize="large" />,
      text: "旋转显示",
      _onClick: () => {
        props.setOpen(true);
      },
    },
    {
      icon: <PercentOutlinedIcon fontSize="large" />,
      text: "偏差估计",
      _onClick: () => {
        props.setResult(resultUrls.bias);
        props.setOpen(true);
      },
    },
  ]);

  return (
    <Box className="myToolBar">
      {toolBar.map((item, index) => (
        <MyIconButton
          key={`toolBar_${index}`}
          _onClick={() => {
            if (item.text !== "输入视频") {
              setToolBar(
                toolBar.map((newItem, newIndex) => {
                  return newIndex === index
                    ? { ...newItem, disabled: true }
                    : { ...newItem, disabled: false || newItem.disabled };
                })
              );
            }
            item._onClick();
          }}
          icon={item.icon}
          text={item.text}
          disabled={item.disabled}
        ></MyIconButton>
      ))}
    </Box>
  );
}

export default Toolbar;
