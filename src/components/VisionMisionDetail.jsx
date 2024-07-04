import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function VisionMissionDetail() {
  return (
    <>
    <Header />
    <div className='pb-20'>
      <div className="max-w-4xl mx-auto p-6 shadow-md rounded-lg mt-16 flex flex-col md:flex-row items-center md:items-center ">
        <div className="flex-grow text-center md:text-left">
          <h1 className="text-3xl font-bold mb-4" style={{ color: 'rgb(93, 185, 93)' }}>Our Vision</h1>
          <p className="text-lg text-700" style={{ color: 'white', fontSize: '16px' }}>
            Our vision is to be a global vanguard in the digital product sector, distinguished by our excellence in application and web development and our pioneering advancements in artificial intelligence. We strive to shape the future of technology by cultivating innovation, fostering creativity, and making significant contributions to societal progress. Through our relentless pursuit of excellence and our commitment to research and development, we aim to inspire a new era of technological possibilities that enhance the quality of life and drive sustainable growth across the globe.
          </p>
        </div>
        <i className="fas fa-eye text-6xl md:text-[160px] ml-4 md:ml-8 mt-4 md:mt-0" style={{ color: 'green' }}></i>
      </div>
      <div className="max-w-4xl mx-auto p-6 shadow-md rounded-lg flex flex-col md:flex-row items-center md:items-center mt-8">
        <div className="flex-grow text-center md:text-left">
          <h1 className="text-3xl font-bold mb-4" style={{ color: 'rgb(93, 185, 93)' }}>Our Mission</h1>
          <p className="text-lg text-700" style={{ color: 'white', fontSize: '16px' }}>
            Our mission is to engineer transformative digital solutions that elevate user experiences through innovative technology. We are committed to delivering premium applications and web solutions while spearheading advanced research and development in artificial intelligence. Our goal is to empower businesses and individuals worldwide with cutting-edge technology, driving efficiency, creativity, and success in every interaction.
          </p>
        </div>
        <i className="fas fa-bullseye text-6xl md:text-[160px] ml-4 md:ml-8 mt-4 md:mt-0" style={{ color: 'green' }}></i>
      </div>
    </div>
    <Footer />
    </>
  );
}
