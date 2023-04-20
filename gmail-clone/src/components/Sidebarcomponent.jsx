import { Box, Button, List, ListItem, styled } from "@mui/material";
import React from "react";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import { MENU_DATA } from "./Menu/menu.config";

const ComposeBtn = styled(Button)({
  backgroundColor: "#C2E7FF",
  color: "black",
  margin: "20px 0 0 20px",
  padding: "10px",
  textTransform: "capitalize",
  width:'150px',
  height: '55px',
  borderRadius:'8px'
});

const CreateIcon = styled(CreateOutlinedIcon)({
  color:'black',
  marginRight:'10px'

})

const Sidebarcomponent = () => {
  return (
    <Box>
      <ComposeBtn varrient="contained">
        <CreateIcon />
        Compose
      </ComposeBtn>
          <List sx={{cursor: 'pointer', padding:'20px 10px 0 0', marginLeft:'15px'}}>
            {
              MENU_DATA.map(data =>(
                <ListItem><data.icon sx={{fontSize:'20px', marginRight:'20px'}}/> {data.title}</ListItem>
              ))
            }
          </List>
    </Box>
  );
};

export default Sidebarcomponent;
