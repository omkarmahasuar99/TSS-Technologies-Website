import ourStoryImage from "../assets/ourStory.jpg";
import ourApproachImage from "../assets/ourApproach.jpg";
import innovationImage from "../assets/innovation.jpg";
import integrityImage from "../assets/integrity.jpg";
import Image from "../assets/images.jpeg";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";

const AboutUs = () => {
  const cards = [
    {
      id: 1,
      title: "Our Story",
      description:
        "We use the power of technology to deliver mission critical IT services that move the world. Our journey began with a simple idea: to create innovative solutions that make a difference.",
      imageUrl: ourStoryImage,
    },
    {
      id: 2,
      title: "Our Approach",
      description:
        "We believe in a client-centric approach, focusing on understanding the unique needs and goals of each client.",
      imageUrl: ourApproachImage,
    },
    {
      id: 3,
      title: "Innovation",
      description:
        "Innovation is at the heart of our business. We continually seek new ideas and technologies to provide cutting-edge solutions that drive success.",
      imageUrl: innovationImage,
    },
    {
      id: 4,
      title: "Integrity",
      description:
        "We uphold the highest standards of integrity in all our actions. Our commitment to ethical practices ensures trust and transparency in our relationships.",
      imageUrl: integrityImage,
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
        <div className="container mx-auto px-4 py-8">
          <section className="mb-12 mx-10">
            <h2 className="text-3xl font-semibold mb-4">Company Overview</h2>
            <p className="text-base mt-10" style={{ wordSpacing: "0.1rem" }}>
              Welcome to tsstechnologies, we are committed to providing
              innovative technology solutions that empower businesses to achieve
              their full potential. Our team of skilled professionals excels in
              areas ranging from web development and app design to software
              testing and data science. We are dedicated to delivering
              high-quality, tailored solutions to meet the diverse needs of our
              clients. Our unwavering commitment to excellence and customer
              satisfaction fuels our every endeavor, ensuring that we deliver
              nothing but the best.
              {isExpanded && (
                <>
                  At tsstechnologies, we strive to be more than just a
                  technology provider. We aim to be your trusted partner on the
                  journey to success in the digital world. At tsstechnologies,
                  we believe in the transformative power of technology to effect
                  positive change. We are committed to continuous exploration
                  and innovation, ensuring that our solutions remain at the
                  forefront of the digital landscape. Join us on our mission to
                  revolutionize industries and enhance lives through exceptional
                  digital advancements.
                </>
              )}
            </p>
            <button className="text-green-700 mt-4" onClick={handleReadMore}>
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-12 mt-20">
            {cards.map((card) => (
              <div
                key={card.id}
                className="bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-xl hover:transform hover:scale-110 transition-transform duration-300"
              >
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-full h-32 object-cover rounded-md mb-6"
                />
                <h2 className="text-white text-lg mb-8 font-bold">
                  {card.title}
                </h2>

                <p className="text-white font semibold mb-2">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
          <section className="mb-10 mt-20 mx-10">
            <h2 className="text-4xl font-semibold mb-4">
              Our dynamic culture is the foundation that upholds our values
            </h2>
            <h4 className="text-xl  mb-4 mt-8">
              Each individual in our team is committed to building a culture of
              exceptional achievement.
            </h4>
          </section>
          <div
            className="mx-10 flex-col items-center justify-center text-center text-white bg-cover bg-center p-8 rounded-lg"
            style={{ backgroundImage: `url(${Image})` }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-4 gap-4">
              {/* Card 1 */}
              <div className="bg-img bg-opacity-100 p-4 ">
                <h2 className="text-white text-xl font-bold mb-2">
                  What we value
                </h2>
                <p className="text-white">
                  We specialize in imagining, building, and implementing
                  technologies that empower our clients to stay continuously
                  informed and agile in their operations
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-img bg-opacity-100 p-4">
                <h2 className="text-white text-xl font-bold mb-2">
                  What we believe
                </h2>
                <p className="text-white">
                  At the heart of our business model lies a commitment to
                  integrating environmental and social considerations into every
                  aspect of our operations
                </p>
              </div>

              {/* Divider */}
              <div className="col-span-1 md:col-span-2">
                <hr className="border-t-1 border-gray-200 my-4" />
              </div>

              {/* Card 3 */}
              <div className="bg-img bg-opacity-100 p-4">
                <h2 className="text-white text-xl font-bold mb-2">
                  Who we are
                </h2>
                <p className="text-white">
                  Every day, across the globe, our dedicated team engineers
                  impactful solutions—for our clients, communities, colleagues,
                  and in our personal lives
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-img bg-opacity-100 p-4">
                <h2 className="text-white text-xl font-bold mb-2">
                  How we behave
                </h2>
                <p className="text-white">
                  We honor and respect each persons unique voice and background,
                  recognizing that diversity not only enriches our culture but
                  also drives our success
                </p>
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
