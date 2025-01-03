import {Outlet} from "react-router-dom";
import {Background, Header} from "../styles/Layout";
import NavBar from "./navBar/NavBar";

const Layout = () => {
  return (
    <>
      <Background>
        <Header>
          <NavBar />
        </Header>
        <Outlet />
      </Background>
    </>
  );
};
export default Layout;
