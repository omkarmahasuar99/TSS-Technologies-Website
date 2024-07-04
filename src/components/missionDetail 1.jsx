import Footer from "./Footer";
import Header from "./Header";

export default function MissionDetail() {
  return (
    <>
      <Header />
      <div className="max-w-2xl mx-auto p-6  shadow-md rounded-lg">
        <h1
          className="text-3xl font-bold mb-4"
          style={{ color: "rgb(93, 185, 93)" }}
        >
          Our Mission{" "}
        </h1>
        <p
          className="text-lg text-700"
          style={{ color: "white", fontSize: "16px," }}
        >
          Our mission is to engineer transformative digital solutions that
          elevate user experiences through innovative technology. We are
          committed to delivering premium applications and web solutions while
          spearheading advanced research and development in artificial
          intelligence. Our goal is to empower businesses and individuals
          worldwide with cutting-edge technology, driving efficiency,
          creativity, and success in every interaction.
        </p>
      </div>
      <Footer />
    </>
  );
}
