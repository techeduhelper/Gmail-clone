import React from "react";
import { AppBar, Box, Toolbar, styled, InputBase} from "@mui/material";
import { LogoUrl } from "../constants/img";
import DehazeIcon from "@mui/icons-material/Dehaze";
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AppsIcon from '@mui/icons-material/Apps';

const StyledAppbar = styled(AppBar)({
  backgroundColor: "#F6F8FC",
  boxShadow: "none",
  display: "flex",
  justifyContent: "space-between",
  width: '100%'
  
});


const SearchBar =styled(Box)({
    display: "flex",
    alignItems:'center',
    marginLeft: '80px',
    minWidth: '690px',
    maxWidth: '720px',
    justifyContent: 'space-between',
    backgroundColor:"#EAF1FB",
    height: '48px',
    borderRadius: '8px',
    padding: '0 20px',
    '& > div':{
      width: '100%',
      padding: '0 10px'
    }
})

const Iconcontainer = styled(Box)({
    display: 'flex',
    width:'100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'end',
    '& > svg':{
      marginLeft:'12px'
    }

})

const Navbar = ({toggleDrawer}) => {
  return (
    <>
      <StyledAppbar position="static">
        <Toolbar>
          <Box>
            <DehazeIcon  color="action" onClick={toggleDrawer}/>
          </Box>
          <img src={LogoUrl} alt="logo" style={{ marginLeft: "25px" }} />
          <SearchBar>
            <SearchIcon color="action"/>
            <InputBase/>
            <TuneIcon color="action"/>
          </SearchBar>
          <Iconcontainer>
            <HelpOutlineOutlinedIcon color="action"/>
            <SettingsOutlinedIcon color="action"/>
            <AppsIcon color="action"/>
            <AccountCircleOutlinedIcon color="action"/>
          </Iconcontainer>
        </Toolbar>
      </StyledAppbar>
    </>
  )
};

export default Navbar;
