import { useState } from "react";
import HomeBanner from "../../components/banner/home-banner.component";

const LandingPage = () => {
  let [loading, setLoading] = useState();
  return (
    <>
      {/* <HomeHeader user={null} />; */}
      <HomeBanner />;
    </>
  );
};

export default LandingPage;
