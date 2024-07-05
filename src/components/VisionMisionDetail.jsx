import React from 'react';
import visionImage from '../assets/vision-image.png';
import missionImage from '../assets/mission_image.png';
import Header from './Header';
import Footer from './Footer';

export default function VisionMissionDetail() {
  return (
    <>
    <Header />
    <div>
      <div className="max-w-6xl mx-auto p-6 shadow-md rounded-lg mt-16 flex flex-col md:flex-row items-center">
        <img
          src={visionImage}
          alt="Vision"
          className="w-60 h-65 rounded-full mt-4 md:mt-0 md:order-first  ml-[65px] mr-0 sm:mr-8 transition duration-300 transform hover:scale-110 order-2"
        />
        <div className="flex-grow o">
          <h1 className="text-3xl font-bold mb-4 text-center transition duration-300" style={{ color: 'rgb(93, 185, 93)' }}>Our Vision</h1>
          <p className="text-lg text-left md:text-left transition duration-300 transform hover:scale-110 text-justify" style={{ color: 'white', fontSize: '16px' }}>
            Our vision is to be a global vanguard in the digital product sector, distinguished by our excellence in application and web development and our pioneering advancements in artificial intelligence. We strive to shape the future of technology by cultivating innovation, fostering creativity, and making significant contributions to societal progress. Through our relentless pursuit of excellence and our commitment to research and development, we aim to inspire a new era of technological possibilities that enhance the quality of life and drive sustainable growth across the globe.
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto p-6 shadow-md rounded-lg flex flex-col md:flex-row-reverse items-center mt-8">
        <div className="flex-grow md:order-last">
          <h1 className="text-3xl font-bold mb-4 text-center transition duration-300" style={{ color: 'rgb(93, 185, 93)' }}>Our Mission</h1>
          <p className="text-lg text-left md:text-left transition duration-300 transform hover:scale-110 text-justify" style={{ color: 'white', fontSize: '16px' }}>
            Our mission is to engineer transformative digital solutions that elevate user experiences through innovative technology. We are committed to delivering premium applications and web solutions while spearheading advanced research and development in artificial intelligence. Our goal is to empower businesses and individuals worldwide with cutting-edge technology, driving efficiency, creativity, and success in every interaction.
          </p>
        </div>
        <img
          src={missionImage}
          alt="Mission"
          className="w-60 h-65 rounded-full mt-4 md:mt-0 md:ml-8 transition duration-300 transform hover:scale-110 "
        />
      </div>
    </div>
    <Footer />
    </>
  );
}
