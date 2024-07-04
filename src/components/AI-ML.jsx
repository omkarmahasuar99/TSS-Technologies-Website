/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import Header from "./Header";
import Footer from "./Footer";
import AIImg from "../assets/ai-banner-2.jpg";
import AIImg2 from "../assets/ai-2.jpg";

const AIComp = () => {
  return (
    <>
      <Header />
      <section>
        <div className="relative py-12 bg-gray-900 sm:py-16 lg:py-20 xl:pt-32 xl:pb-44">
          <div className="absolute inset-0 hidden lg:block">
            <img
              className="object-cover object-right-bottom w-full h-full"
              src={AIImg}
              alt=""
            />
          </div>

          <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-xl mx-auto text-center lg:max-w-md xl:max-w-lg lg:text-left lg:mx-0">
              <h1 className="text-3xl font-bold text-white sm:text-4xl xl:text-5xl xl:leading-tight">
                AI/ML
              </h1>
              <p className="mt-8 text-base text-white font-normal leading-7 lg:max-w-md xl:pr-0 lg:pr-16">
                Our AI/ML solutions enhance our software with predictive
                analytics, NLP, and computer vision for superior functionality.
              </p>
              <p className="mt-8 text-base font-normal leading-7 text-white lg:max-w-md xl:pr-0 lg:pr-16">
                Our AI/ML services leverage predictive analytics, natural
                language processing, and computer vision to improve our
                software's performance and user experience.
              </p>
            </div>
          </div>

          <div className="mt-8 lg:hidden">
            <img className="object-cover w-full h-full" src={AIImg} alt="" />
          </div>
        </div>
      </section>
      <section className="m-4 md:m-8 dark:bg-gray-100 dark:text-gray-800">
        <div
          className="container p-4 mx-auto my-6 space-y-1 text-center"
          bis_skin_checked="1"
        >
          <span className="text-xs font-semibold tracking-wider uppercase dark:text-violet-600">
            shortcut to your dream product
          </span>
          <h2 className="pb-3 text-3xl font-bold md:text-4xl">
            Advanced AI & Machine Learning Solutions
          </h2>
          <p>
            Our AI/ML team leverages state-of-the-art technologies and
            methodologies to integrate intelligent solutions into our software
            products. We aim to enhance functionality, improve user experiences,
            and drive data-driven decision-making.
          </p>
        </div>
        <div
          className="container grid justify-center gap-4 mx-auto lg:grid-cols-2 xl:grid-cols-4"
          bis_skin_checked="1"
        >
          <div className="flex flex-col px-8 py-6" bis_skin_checked="1">
            <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-800">
              Custom AI/ML Development
            </h2>
            <p className="flex-1 mb-4 text-base leading-relaxed dark:text-gray-600">
              Creating tailored AI and machine learning models that address
              specific challenges and enhance our software capabilities.
            </p>
            <a
              className="inline-flex items-center space-x-2 text-sm dark:text-violet-600"
              href="/components"
            ></a>
          </div>
          <div
            className="flex flex-col px-8 py-6 lg:border-none xl:border-solid"
            bis_skin_checked="1"
          >
            <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-800">
              Predictive Analytics
            </h2>
            <p className="flex-1 mb-4 text-base leading-relaxed dark:text-gray-600">
              Utilizing advanced analytics to predict trends, optimize
              performance, and provide actionable insights.
            </p>
            <a
              className="inline-flex items-center space-x-2 text-sm dark:text-violet-600"
              href="/sections"
            ></a>
          </div>
          <div className="flex flex-col px-8 py-6" bis_skin_checked="1">
            <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-800">
              Natural Language Processing
            </h2>
            <p className="flex-1 mb-4 text-base leading-relaxed dark:text-gray-600">
              Implementing NLP techniques to improve user interactions and
              automate processes through understanding and processing human
              language.
            </p>
            <a
              className="inline-flex items-center space-x-2 text-sm dark:text-violet-600"
              href="/templates"
            ></a>
          </div>
          <div className="flex flex-col px-8 py-6" bis_skin_checked="1">
            <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-800">
              Computer Vision
            </h2>
            <p className="flex-1 mb-4 text-base leading-relaxed dark:text-gray-600">
              Integrating computer vision capabilities to analyze and interpret
              visual data, enhancing the functionality of our software products.
            </p>
            <a
              className="inline-flex items-center space-x-2 text-sm dark:text-violet-600"
              href="/docs"
            ></a>
          </div>
        </div>
      </section>
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div
          className="container flex flex-col-reverse mx-auto lg:flex-row"
          bis_skin_checked="1"
        >
          <div
            className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-violet-600 dark:text-gray-50"
            bis_skin_checked="1"
          >
            <div className="flex space-x-2 sm:space-x-4" bis_skin_checked="1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="flex-shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
              <div className="space-y-2" bis_skin_checked="1">
                <p className="text-lg font-medium leading-snug">
                  Continuous Improvement
                </p>
                <p className="leading-snug">
                  Regularly updating and refining our AI models to ensure
                  optimal performance and accuracy.
                </p>
              </div>
            </div>
            <div className="flex space-x-2 sm:space-x-4" bis_skin_checked="1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="flex-shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
              <div className="space-y-2" bis_skin_checked="1">
                <p className="text-lg font-medium leading-snug">
                  Scalable AI Solutions
                </p>
                <p className="leading-snug">
                  Developing AI/ML solutions that can scale with our products,
                  adapting to growing data and evolving requirements.
                </p>
              </div>
            </div>
            <div className="flex space-x-2 sm:space-x-4" bis_skin_checked="1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="flex-shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
              <div className="space-y-2" bis_skin_checked="1">
                <p className="text-lg font-medium leading-snug">
                  Enhanced Security and Compliance
                </p>
                <p className="leading-snug">
                  Ensuring our AI implementations adhere to the highest security
                  standards and regulatory requirements to protect data and
                  privacy.
                </p>
              </div>
            </div>
          </div>
          <div
            className="lg:w-1/2 xl:w-3/5 dark:bg-gray-100"
            bis_skin_checked="1"
          >
            <div
              className="flex items-center justify-center p-4 md:p-8 lg:p-12"
              bis_skin_checked="1"
            >
              <img
                src={AIImg2}
                alt=""
                className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AIComp;
