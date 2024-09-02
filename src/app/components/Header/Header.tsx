import { FC, useState } from "react";
import SideDrawer from "../SideDrawer/SideDrawer";
import AppbarComponent from "../Appbar/Appbar";

const Header: FC = () => {
  const [showSideDrawer, setShowSideDrawer] = useState<Boolean>(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setShowSideDrawer(newOpen);
  };

  return (
    <header id="app-header" className="app-header">
      <AppbarComponent
        showSideDrawer={showSideDrawer}
        toggleDrawer={toggleDrawer}
      />
      <SideDrawer showSideDrawer={showSideDrawer} toggleDrawer={toggleDrawer} />
    </header>
  );
};

export default Header;
