import React, { useState } from 'react';
import ourStoryImage from '../assets/ourStory.jpg';
import ourApproachImage from '../assets/ourApproach.jpg';
import innovationImage from '../assets/innovation.jpg';
import integrityImage from '../assets/integrity.jpg';
import Image from '../assets/images.jpeg';
import visionImage from '.././assets/vision-image.png'
import missionImage from '.././assets/mission_image.png'
import Header from './Header';
import Footer from './Footer';
const AboutUs = () => {
  const cards = [
    {
      id: 1,
      title: 'Our Story',
      description: 'We use the power of technology to deliver mission critical IT services that move the world. Our journey began with a simple idea: to create innovative solutions that make a difference.',
      imageUrl: ourStoryImage
    },
    {
      id: 2,
      title: 'Our Approach',
      description: 'We believe in a client-centric approach, focusing on understanding the unique needs and goals of each client.',
      imageUrl: ourApproachImage
    },
    {
      id: 3,
      title: 'Innovation',
      description: 'Innovation is at the heart of our business. We continually seek new ideas and technologies to provide cutting-edge solutions that drive success.',
      imageUrl: innovationImage
    },
    {
      id: 4,
      title: 'Integrity',
      description: 'We uphold the highest standards of integrity in all our actions. Our commitment to ethical practices ensures trust and transparency in our relationships.',
      imageUrl:integrityImage
    },
  ];

  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
    <Header />
    <div className="bg-black-100 py-10">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-8">
      
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Company Overview</h2>
          <p className="text-base text-justify mt-10" style={{ wordSpacing: '0.1rem' }}>
            Welcome to tsstechnologies, we are committed to providing innovative technology solutions that empower businesses to achieve their full potential. Our team of skilled professionals excels in areas ranging from web development and app design to software testing and data science. We are dedicated to 
            
            <span className={`additional-content ${isExpanded ? 'expanded' : ''}`}>
          
             delivering high-quality, tailored solutions to meet the diverse needs of our clients. Our unwavering commitment to excellence and customer satisfaction fuels our every endeavor, ensuring that we deliver nothing but the best. At tsstechnologies, we strive to be more than just a technology provider. We aim to be your trusted partner on the journey to success in the digital world. At tsstechnologies, we believe in the transformative power of technology to effect positive change. We are committed to continuous exploration and innovation, ensuring that our solutions remain at the forefront of the digital landscape. Join us on our mission to revolutionize industries and enhance lives through exceptional digital advancements.
            </span>
        </p>
        <button
        className="text-green-700 mt-4 read-more-btn"
        onClick={handleReadMore}
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>

        </section>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20 ">
          {cards.map(card => (
            <div key={card.id} 
             className="bg-gray-900 p-10 rounded-lg shadow-lg hover:shadow-xl hover:transform hover:scale-110 transition-transform duration-300">
              <img src={card.imageUrl} alt={card.title} className="w-full h-32 object-cover rounded-md mb-6" />
              <h2 className="text-white text-lg mb-8 font-bold">{card.title}</h2>
              
              <p className = "text-white font semibold mb-2">{card.description}</p>
             
            </div>
          ))}
        </div>

        
        <div id='vision' className="text-center">
          <div className="max-w-2xl mx-auto p-6 shadow-md rounded-lg mt-8 flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-4 transition duration-300" style={{ color: 'white' }}>Our Vision</h1>
            <img
              src={visionImage}
              alt="Vision"
              className="w-60 h-65 rounded-full mt-4 transition duration-300 transform hover:scale-110"
            />
            <p className="text-lg text-justify md:text-center transition duration-300 transform hover:scale-110 " style={{ color: 'white', fontSize: '16px' }}>
              Our goal is to lead the world in digital product development, showcasing superior application and web development skills and AI breakthroughs. We aim to encourage innovation, nurture creativity, and contribute to societal advancement, stimulating a new era of technology.
            </p>
            
          </div>
        </div>
        <div id='mission' className="text-center">
          <div className="max-w-2xl mx-auto p-6 shadow-md rounded-lg flex flex-col items-center mt-4">
            <h1 className="text-3xl font-bold mb-4 transition duration-300" style={{ color: 'white' }}>Our Mission</h1>
            <img
              src={missionImage}
              alt="Mission"
              className="w-60 h-65 rounded-full mt-4 transition duration-300 transform hover:scale-110"
            />
            <p className="text-lg text-justify md:text-center transition duration-300 transform hover:scale-110" style={{ color: 'white', fontSize: '16px' }}>
              Our mission is to create innovative digital solutions, enhancing user experiences, promoting efficiency, creativity, and success through advanced artificial intelligence research and development.
            </p>
            
          </div>
        </div>

        <section className="mb-10 mt-20 ">
          <h2 className="text-4xl font-semibold mb-4">Our dynamic culture is the foundation that upholds our values</h2>
          <h4 className='text-xl  mb-4 mt-8'>Each individual in our team is committed to building a culture of exceptional achievement.</h4>
         
        </section>
        <div
        className=" flex-col items-center justify-center text-center text-white bg-cover bg-center p-8 rounded-lg"
        style={{ backgroundImage: `url(${Image})` }}
      >

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-4 gap-4">
          {/* Card 1 */}
          <div className="bg-img bg-opacity-100 p-2 ">
            <h2 className="text-white text-xl font-bold mb-2">What we value</h2>
            <p className="text-white">We specialize in imagining, building, and implementing technologies that empower our clients to stay continuously informed and agile in their operations</p>
          </div>

          {/* Card 2 */}
          <div className="bg-img bg-opacity-100 p-2">
            <h2 className="text-white text-xl font-bold mb-2">What we believe</h2>
            <p className="text-white">At the heart of our business model lies a commitment to integrating environmental and social considerations into every aspect of our operations</p>
          </div>

          {/* Divider */}
          <div className="col-span-1 md:col-span-2">
            <hr className="border-t-1 border-gray-200 my-4" />
          </div>

          {/* Card 3 */}
          <div className="bg-img bg-opacity-100 p-2">
            <h2 className="text-white text-xl font-bold mb-2">Who we are</h2>
            <p className="text-white ">Every day, across the globe, our dedicated team engineers impactful solutions-for our clients, communities, colleagues, and in our personal lives</p>
          </div>

          {/* Card 4 */}
          <div className="bg-img bg-opacity-100 p-2">
            <h2 className="text-white text-xl font-bold mb-2">How we behave</h2>
            <p className="text-white">We honor and respect each persons unique voice and background, recognizing that diversity not only enriches our culture but also drives our success</p>
          </div>
        </div>

        
        </div>
       
      </div>
    </div>
    <Footer />    
    </>
  );
};

export default AboutUs;
