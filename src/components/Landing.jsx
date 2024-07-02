import Header from "./Header";
import VisionMission from "./VisionMision 1";
import TechnologiesUsed from "./TechnologiesUsed";
import Footer from "./Footer";
import SoftwareUsed from "./SoftwareUsed";
import Banner from "./Banner";

export default function Landing() {
  return (
    <>
      <Header />
      <Banner />
      <SoftwareUsed />
      <VisionMission />
      <TechnologiesUsed />
      <Footer />
    </>
  );
}
