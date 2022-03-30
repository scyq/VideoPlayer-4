import { Box } from "@mui/system";
import "./Sidebar.css";

function Sidebar() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {[0, 1, 2, 3].map((index) => (
        <Box sx={{ background: "#F1EFF1" }}>
          <Box className="sideBarTitle">采集信息</Box>
          <Box sx={{ padding: "10px" }}>
            <Box className="textLine">采集幅面：0</Box>
            <Box className="textLine">采集帧率：0</Box>
            <Box className="textLine">帧 号： 0</Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default Sidebar;
