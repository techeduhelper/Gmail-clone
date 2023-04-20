import React from 'react'
import {Drawer , styled} from '@mui/material';
import Sidebarcomponent from './Sidebarcomponent';

const Leftsidebar = ({openDrawer}) => {
  return (
    <Drawer
      anchor='left'
      open={openDrawer}
      hideBackdrop={true}
      ModalProps={{
        keepMounted: true
      }}
      variant='persistent'
      sx={{
        '& .MuiDrawer-paper':{
          marginTop:'64px',
          width: '260px',
          backgroundColor: '#F6F8FC',
          borderRight:'none'
        }
      }}
    >
      <Sidebarcomponent/>
    </Drawer>
  )
}

export default Leftsidebar;