import { useState } from "react";
import HomeHeader from "../../components/header/header.component";
import HomeBanner from "../../components/banner/home-banner.component";
import HomeFooter from "../../components/footer/footer.component";

const LandingPage = () => {
  let [loading, setLoading] = useState();
  return (
    <>
      <HomeHeader user={{ name: "John", email: "johndoe@gmail.com" }} />;
      {/* <HomeHeader user={null} />; */}
      <HomeBanner />;
    </>
  );
};

export default LandingPage;
