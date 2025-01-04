import { useState } from "react";
import HeaderPage from "../../components/header/header.component";
import HomeBanner from "../../components/banner/home-banner.component";
import HomeFooter from "../../components/footer/footer.component";

const LandingPage = () => {
  let [loading, setLoading] = useState();
  return (
    <>
      <HeaderPage user={{ name: "John", email: "johndoe@gmail.com" }} />;
      {/* <HeaderPage user={null} />; */}
      <HomeBanner />;
      <HomeFooter />;
    </>
  );
};

export default LandingPage;
