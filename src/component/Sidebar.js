import { Box } from "@mui/system";

function Sidebar() {
  return (
    <Box sx={{ padding: "20px" }}>
      {[0, 1, 2, 3].map((index) => (
        <Box sx={{ background: "#F1EFF1", margin: "20px" }}>
          <Box sx={{ color: "#3877CD", fontWeight: "bold" }}>采集信息</Box>
          <Box>采集幅面：0</Box>
          <Box>采集帧率：0</Box>
          <Box>帧 号： 0</Box>
        </Box>
      ))}
    </Box>
  );
}

export default Sidebar;
