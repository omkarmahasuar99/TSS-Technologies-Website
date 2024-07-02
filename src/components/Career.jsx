/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import { motion } from "framer-motion";
import JobList from "./Joblist";
import career from "../assets/career.jpg";
import work from "../assets/work.png";
import c1 from "../assets/c1.jpeg";
import {
  FaLightbulb,
  FaUserTie,
  FaHandsHelping,
  FaGlobe,
} from "react-icons/fa";
import Footer from "./Footer";
import Header from "./Header";

const Career = () => {
  return (
    <>
      <Header />
      <div className="career-page bg-white text-black">
        <header className="relative bg-white text-white text-center">
          <img
            src={career}
            alt="Career Header"
            className="w-full h-auto p-2 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center py-10">
            <h1 className="text-4xl font-bold">Join Our Team</h1>
            <p className="mt-4 text-lg">
              Innovate with us and shape the future of technology.
            </p>
          </div>
        </header>

        <section className="job-listings py-12 px-4 mt-10">
          <h2 className="text-3xl font-bold text-center ">
            Job Recommendation For You
          </h2>
          <JobList />
        </section>

        <section className="build-future py-12 px-4 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <img
              src={work}
              alt="Build Your Future"
              className=" rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-12 mt-8 lg:mt-0">
            <h2 className="text-4xl  font-bold ">Build Your Future</h2>
            <p className="mt-10">
              At TSS Technologies, we believe in empowering our employees to
              build their future. We provide opportunities for growth, learning,
              and development, ensuring that you have the tools you need to
              succeed and make a difference in the world.
            </p>
            <p className="mt-6">
              Whether you're an experienced professional or just starting out,
              we offer a range of career paths and support to help you achieve
              your goals. Join us and take the first step towards a rewarding
              and fulfilling career.
            </p>
          </div>
        </section>

        <section className="why-work-with-us py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-8">
              Why work with TSS Technologies?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-green-500 text-white p-3">
                  <FaLightbulb className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-green-600 mb-2">
                    Innovation and Growth
                  </h3>
                  <p className="text-gray-700">
                    Be part of a company that values creativity and continuous
                    improvement. We are dedicated to staying ahead of
                    technological trends and fostering an environment where
                    innovative ideas can flourish.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-green-500 text-white p-3">
                  <FaUserTie className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-green-600 mb-2">
                    Professional Development
                  </h3>
                  <p className="text-gray-700">
                    We believe in investing in our employees' growth. Our
                    commitment to professional development ensures that you will
                    have access to ongoing training, mentorship, and
                    opportunities to advance your career.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-green-500 text-white p-3">
                  <FaHandsHelping className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-green-600 mb-2">
                    Collaborative Culture
                  </h3>
                  <p className="text-gray-700">
                    Our team is our greatest asset. We cultivate a collaborative
                    and inclusive workplace where diverse perspectives are
                    valued, and teamwork is encouraged. Together, we achieve
                    excellence.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-green-500 text-white p-3">
                  <FaGlobe className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-green-600 mb-2">
                    Impactful Work
                  </h3>
                  <p className="text-gray-700">
                    At TSS Technologies, your work will have a tangible impact.
                    Our projects are designed to solve real-world problems and
                    create positive change in the industries we serve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="career-section container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="lg:w-1/2 lg:pr-12 mt-8 lg:mt-0 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-2xl font-bold mb-4 text-gray-800">
              Are you ready to take on the challenge?
            </h1>
            <p className="text-base text-gray-700 mb-6">
              Together, we work to transform the world's leading businesses and
              build a better future while always pushing ourselves to do better.
              Together, we build great careers and give innovation that human
              touch the world needs.
            </p>
            <p className="text-l font-semibold text-gray-800">
              TSS Technologies. Get the future you want.
            </p>
          </motion.div>
          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <img
              src={c1}
              alt="Career"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </motion.div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Career;
