import { Box } from "@mui/system";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import "./MessageStack.css";
import { useState } from "react";
import "../index.css";

function MessageStack() {
  const [messages, setMessages] = useState([]);

  return (
    <Box className="border messageStack">
      <List>
        {messages.map((message, index) => (
          <ListItem key={`message${index}`}>
            <ListItemButton>
              <ListItemText primary={message}></ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default MessageStack;
