/* eslint-disable react/no-unknown-property */
import Header from "./Header";
import Footer from "./Footer";
import AIImg from "../assets/work.png";
import { useNavigate } from "react-router-dom";

const AIComp = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <section>
        <div
          onClick={() => navigate("/ai-ml")}
          className="relative py-12 bg-gray-900 sm:py-16 lg:py-20 xl:pt-32 xl:pb-44"
        >
          <div className="absolute inset-0 hidden lg:block">
            <img
              className="object-cover object-right-bottom w-full h-full"
              src={AIImg}
              alt=""
            />
          </div>

          <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-xl mx-auto text-center lg:max-w-md xl:max-w-lg lg:text-left lg:mx-0">
              <h1 className="text-3xl font-bold text-gray-200 sm:text-4xl xl:text-5xl xl:leading-tight">
                AI/ML
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
              src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/1/bg.png"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="m-4 bg-neutral-950 md:m-8 dark:bg-gray-100 dark:text-gray-800">
        <div
          className="container p-4 mx-auto my-6 space-y-1 text-center"
          bis_skin_checked="1"
        >
          <span className="text-xs font-semibold tracking-wider uppercase dark:text-violet-600">
            shortcut to your dream ui
          </span>
          <h2 className="pb-3 text-3xl font-bold md:text-4xl">
            Create a stylish website in minutes
          </h2>
          <p>
            Get a jumpstart to creating your new webpage! With our fully
            responsive and carefully styled components you can get the structure
            of your website done with just a couple of clicks.
          </p>
        </div>
        <div
          className="container grid justify-center gap-4 mx-auto lg:grid-cols-2 xl:grid-cols-4"
          bis_skin_checked="1"
        >
          <div className="flex flex-col px-8 py-6" bis_skin_checked="1">
            <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-800">
              Components
            </h2>
            <p className="flex-1 mb-4 text-base leading-relaxed dark:text-gray-600">
              Individual components that can be re-used multiple times in your
              designs.
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
              Sections
            </h2>
            <p className="flex-1 mb-4 text-base leading-relaxed dark:text-gray-600">
              Pre-made building blocks that you can stack on top of each other
              like Legos to build a website of your own in minutes.
            </p>
            <a
              className="inline-flex items-center space-x-2 text-sm dark:text-violet-600"
              href="/sections"
            ></a>
          </div>
          <div className="flex flex-col px-8 py-6" bis_skin_checked="1">
            <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-800">
              Templates
            </h2>
            <p className="flex-1 mb-4 text-base leading-relaxed dark:text-gray-600">
              Full pages that showcase pieces of what you can achieve with the
              building blocks that are in this UI kit.
            </p>
            <a
              className="inline-flex items-center space-x-2 text-sm dark:text-violet-600"
              href="/templates"
            ></a>
          </div>
          <div className="flex flex-col px-8 py-6" bis_skin_checked="1">
            <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-800">
              Customization
            </h2>
            <p className="flex-1 mb-4 text-base leading-relaxed dark:text-gray-600">
              Choose your primary color from any of the Tailwind CSS 2.0 colors.
              You can also view all of the components in our light and dark
              themes.
            </p>
            <a
              className="inline-flex items-center space-x-2 text-sm dark:text-violet-600"
              href="/docs"
            ></a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AIComp;
