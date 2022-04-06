import "./MyIconButton.css";
import { Button } from "@mui/material";
import { Box } from "@mui/system";

function MyIconButton(props) {
  return (
    <Button
      className="Button"
      onClick={props._onClick}
      disabled={props.disabled}
    >
      {props.icon}
      <Box sx={{ color: "black" }}>{props.text}</Box>
    </Button>
  );
}

export default MyIconButton;
