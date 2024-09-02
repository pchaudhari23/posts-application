import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import FeedIcon from "@mui/icons-material/Feed";
import PeopleIcon from "@mui/icons-material/People";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InterestsIcon from "@mui/icons-material/Interests";
import ApartmentIcon from "@mui/icons-material/Apartment";
import EventIcon from "@mui/icons-material/Event";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import LogoutIcon from "@mui/icons-material/Logout";

export default function SideDrawer(props: any) {
  const { showSideDrawer, toggleDrawer } = props;

  const sideMenuItems = [
    {
      icon: <FeedIcon />,
      text: "Posts",
    },
    {
      icon: <PeopleIcon />,
      text: "Friends",
    },
    {
      icon: <PhotoLibraryIcon />,
      text: "Memories",
    },
    {
      icon: <InterestsIcon />,
      text: "Interests",
    },
    {
      icon: <ApartmentIcon />,
      text: "Places",
    },
    {
      icon: <EventIcon />,
      text: "Events",
    },
    {
      icon: <AccountBoxIcon />,
      text: "Profile",
    },
    {
      icon: <SettingsIcon />,
      text: "Settings & Privacy",
    },
    {
      icon: <HelpCenterIcon />,
      text: "Help & Support",
    },
    {
      icon: <LogoutIcon />,
      text: "Logout",
    },
  ];

  const SideMenu = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {sideMenuItems.map((item, index) => (
          <div key={index}>
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer
      id="app-drawer"
      className="app-drawer"
      // variant="persistent"
      anchor="left"
      open={showSideDrawer}
      onClose={toggleDrawer(false)}
    >
      {SideMenu}
    </Drawer>
  );
}
