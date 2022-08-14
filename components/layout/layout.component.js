import { Fragment } from "react";
import NavigationBar from "../navigation-bar/navigation-bar.component";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <NavigationBar />
      <main>{children}</main>
    </Fragment>
  );
};

export default Layout;
