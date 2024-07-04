/* eslint-disable react/no-unescaped-entities */
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/open-animation.css";
import bannerImage1 from "../assets/banner1.jpg";
import bannerImage2 from "../assets/banner4.jpg";
import bannerImage3 from "../assets/banner3.jpg";

const Banner = () => {
  return (
    <div className="h-screen">
      <AwesomeSlider
        animation="openAnimation"
        bullets={false}
        className="h-full with-controls"
        fillParent={true}
      >
        <div className="relative h-screen w-full">
          <img
            src={bannerImage1}
            alt="Innovative Tech Solutions"
            className="object-cover h-full w-full"
          />
          <div className="absolute inset-0 flex items-center  bg-black bg-opacity-50">
            <h1 className="text-4xl w-96 relative bottom-40 left-40 opacity-70 font-bold text-white p-0 rounded animate-fadeIn">
              Innovative Solutions for Tomorrow's Challenges
            </h1>
            <p
              className="relative opacity-70  animate-fadeIn"
              style={{ right: "220px", width: "400px" }}
            >
              At tssstechnologies, we specialize in creating advanced products
              that solve real-world problems. Our team of experts is dedicated
              to pushing the boundaries of technology.
            </p>
          </div>
        </div>
        <div className="relative h-screen w-full">
          <img
            src={bannerImage2}
            alt="Empowering Your Business"
            className="object-cover h-full w-full"
          />
          <div className="absolute inset-0 flex items-center  bg-black bg-opacity-50">
            <h1 className="text-4xl w-96 relative bottom-32 left-40 opacity-70 font-bold text-white p-2 rounded animate-fadeIn">
              Leading the Way in Technology
            </h1>
            <p
              className="relative opacity-70  animate-fadeIn"
              style={{ right: "220px", width: "400px" }}
            >
              Discover tsstechnologies' latest advancements and how we're
              shaping the future with cutting-edge technologies. From AI to IoT,
              explore how our solutions are setting new benchmarks.
            </p>
          </div>
        </div>
        <div className="relative h-screen w-full">
          <img
            src={bannerImage3}
            alt="Leading the Future of Technology"
            className="object-cover h-full w-full"
          />
          <div className="absolute inset-0 flex items-center bg-black bg-opacity-50">
            <h1 className="text-4xl w-96 relative bottom-32 left-40 opacity-70 font-bold text-white p-2 rounded animate-fadeIn">
              Innovating Today for Tomorrow
            </h1>
            <p
              className="relative opacity-70  animate-fadeIn"
              style={{ right: "220px", width: "400px" }}
            >
              Explore tsstechnologies' dedication to pushing the boundaries of
              technology through ongoing research and development. Learn how our
              innovative solutions anticipate and meet future challenges.
            </p>
          </div>
        </div>
      </AwesomeSlider>
    </div>
  );
};

export default Banner;
