import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import SettingsIcon from '@mui/icons-material/Settings';
import ListAltIcon from '@mui/icons-material/ListAlt';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CancelIcon from '@mui/icons-material/Cancel';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';


const drawerWidth = 240;

const Sidebar = () => {
  return (
   
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      <Toolbar />
      <List>
  <ListItem button>
    <ListItemIcon>
      <DashboardIcon />
    </ListItemIcon>
    <ListItemText primary="Dashboard" />
  </ListItem>
  <ListItem button>
    <ListItemIcon>
      <AddShoppingCartIcon />
    </ListItemIcon>
    <ListItemText primary="New Order" />
  </ListItem>
  <ListItem button>
    <ListItemIcon>
      <ListAltIcon />
    </ListItemIcon>
    <ListItemText primary="Total Product" />
  </ListItem>
  <ListItem button>
    <ListItemIcon>
      <VisibilityIcon />
    </ListItemIcon>
    <ListItemText primary="Pending Order" />
  </ListItem>
  <ListItem button>
    <ListItemIcon>
      <CancelIcon />
    </ListItemIcon>
    <ListItemText primary="Rejected Orders" />
  </ListItem>
  <ListItem button>
    <ListItemIcon>
      <AttachMoneyIcon />
    </ListItemIcon>
    <ListItemText primary="Daily Sale" />
  </ListItem>
  <ListItem button>
    <ListItemIcon>
      <AddShoppingCartIcon />
    </ListItemIcon>
    <ListItemText primary="Add Product" />
  </ListItem>
</List>

    </Drawer>
   
   
    
  );
};

export default Sidebar;
