import Header from "./Header";
import VisionMission from "./VisionMision 1";
import TechnologiesUsed from "./TechnologiesUsed";
import Footer from "./Footer";
import SoftwareUsed from "./SoftwareUsed";
import Hero from "./Hero";
import Blog from "./Blog";

export default function Landing() {
  return (
    <>
      <Header />
      <Hero />
      <SoftwareUsed />
      <VisionMission />
      <TechnologiesUsed />
      <Blog />
      <Footer />
    </>
  );
}
