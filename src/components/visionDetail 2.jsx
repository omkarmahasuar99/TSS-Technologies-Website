/* eslint-disable no-irregular-whitespace */

import Header from "./Header";
import Footer from "./Footer";
export default function VisionDetail() {
  return (
    <>
      <Header />
      <div className="max-w-2xl mx-auto p-6  shadow-md rounded-lg">
        <h1
          className="text-3xl font-bold mb-4"
          style={{ color: "rgb(93, 185, 93)" }}
        >
          Our Vission
        </h1>
        <p
          className="text-lg text-700"
          style={{ color: "white", fontSize: "16px" }}
        >
          Our vision is to be a global vanguard in the digital product sector,
          distinguished by our excellence in application and web development and
          our pioneering advancements in artificial intelligence. We strive to
          shape the future of technology by cultivating innovation, fostering
          creativity, and making significant contributions to societal progress.
          Through our relentless pursuit of excellence and our commitment to
          research and development, we aim to inspire a new era of technological
          possibilities that enhance the quality of life and drive sustainable
          growth across the globe.
        </p>
      </div>
      <Footer />
    </>
  );
}
