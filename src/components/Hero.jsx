import backgroundImg from "../assets/backgroundImg.png";

function Hero() {
  return (
    <div>
      <img src={backgroundImg} className="w-full h-[88vh] object-cover" />
    </div>
  );
}

export default Hero;
