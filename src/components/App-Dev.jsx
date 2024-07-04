/* eslint-disable react/no-unknown-property */
import Header from "./Header";
import Footer from "./Footer";
import appDevImg from "../assets/appDevImg.jpg";
import appDevImg2 from "../assets/appDevImg2.jpg";
export default function AppDev() {
  return (
    <>
      <Header />
      <section>
        <div className="relative py-12 bg-gray-900 sm:py-16 lg:py-20 xl:pt-32 xl:pb-44">
          <div className="absolute inset-0 hidden lg:block">
            <img
              className="object-cover object-right-bottom w-full h-full"
              src={appDevImg}
              alt=""
            />
          </div>

          <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-xl mx-auto text-center lg:max-w-md xl:max-w-lg lg:text-left lg:mx-0">
              <h1 className="text-3xl font-bold text-gray-200 sm:text-4xl xl:text-5xl xl:leading-tight">
                App Development
              </h1>
              <p className="mt-8 text-base font-normal leading-7 text-gray-400 lg:max-w-md xl:pr-0 lg:pr-16">
                We specialize in crafting sophisticated mobile applications that
                redefine user experiences.
              </p>
              <p className="mt-8 text-base font-normal leading-7 text-gray-400 lg:max-w-md xl:pr-0 lg:pr-16">
                With a strong emphasis on intuitive design and state-of-the-art
                functionalities, our mobile apps set new standards in usability
                and innovation.
              </p>
            </div>
          </div>

          <div className="mt-8 lg:hidden">
            <img
              className="object-cover w-full h-full"
              src={appDevImg}
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="m-4 md:m-8 dark:bg-gray-100 dark:text-gray-800">
        <div
          className="container p-4 mx-auto my-6 space-y-1 text-center"
          bis_skin_checked="1"
        >
          <span className="text-xs font-semibold tracking-wider uppercase dark:text-violet-600">
            shortcut to your dream ui
          </span>
          <h2 className="pb-3 text-3xl font-bold md:text-4xl">
          Innovative App Development for Software Solutions
          </h2>
          <p>
          Our experienced app development team specializes in crafting cutting-edge mobile applications that align with our software products. We focus on delivering intuitive, high-performance apps that meet the evolving needs of our users.
          </p>
        </div>
        <div
          className="container grid justify-center gap-4 mx-auto lg:grid-cols-2 xl:grid-cols-4"
          bis_skin_checked="1"
        >
          <div className="flex flex-col px-8 py-6" bis_skin_checked="1">
            <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-800">
            Custom Mobile App Development
            </h2>
            <p className="flex-1 mb-4 text-base leading-relaxed dark:text-gray-600">
            Designing and developing tailor-made mobile applications that reflect our software's unique functionalities and user requirements.
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
            Cross-Platform Compatibility
            </h2>
            <p className="flex-1 mb-4 text-base leading-relaxed dark:text-gray-600">
            Building apps that provide a seamless experience across various platforms, including iOS and Android.
            </p>
            <a
              className="inline-flex items-center space-x-2 text-sm dark:text-violet-600"
              href="/sections"
            ></a>
          </div>
          <div className="flex flex-col px-8 py-6" bis_skin_checked="1">
            <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-800">
            User-Centric Design
            </h2>
            <p className="flex-1 mb-4 text-base leading-relaxed dark:text-gray-600">
            Implementing user-friendly interfaces and experiences to ensure our apps are intuitive and engaging.
            </p>
            <a
              className="inline-flex items-center space-x-2 text-sm dark:text-violet-600"
              href="/templates"
            ></a>
          </div>
          <div className="flex flex-col px-8 py-6" bis_skin_checked="1">
            <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-800">
            Integration with Software Products
            </h2>
            <p className="flex-1 mb-4 text-base leading-relaxed dark:text-gray-600">
            Ensuring seamless integration with our existing software solutions to provide a cohesive user experience.
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
                Regular Updates and Maintenance
                </p>
                <p className="leading-snug">
                Offering continuous support and timely updates to keep our apps running smoothly and efficiently.
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
                Performance Optimization
                </p>
                <p className="leading-snug">
                Utilizing best practices to enhance app performance and ensure fast, responsive user interactions.
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
                Robust Security
                </p>
                <p className="leading-snug">
                Implementing advanced security measures to protect user data and ensure the reliability of our applications.
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
                src={appDevImg2}
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
}
