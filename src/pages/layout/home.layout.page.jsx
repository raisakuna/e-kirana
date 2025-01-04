import { Outlet } from "react-router-dom";
import HomeHeader from "../../components/header/header.component";
import HomeFooter from "../../components/footer/footer.component";

const HomePageLayout = () => {
  return (
    <>
      <HomeHeader />
      <Outlet />
      <HomeFooter />
    </>
  );
};
export default HomePageLayout;
