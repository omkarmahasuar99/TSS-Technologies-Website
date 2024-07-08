import { Routes, Route } from "react-router-dom";
import WebDev from "./components/Web-Dev";
import AppDev from "./components/App-Dev";
import VisionDetail from "./components/visionDetail 2";
import MissionDetail from "./components/misionDetail 1";
import ContactUs from "./components/ContactUs";
import { BrowserRouter as Router } from "react-router-dom";
import Landing from "./components/Landing";
import Career from "./components/Career";
import AboutUs from "./components/AboutUs";
import AIComp from "./components/AI-ML";
import JobDetails from "./components/Jobdetails";
import VisionMissionDetail from "./components/VisionMisionDetail";
import ServersideRendering from "./components/ServersideRendering";
import ArtificialIntelligence from "./components/ArtificailInteligence";
import InternetOfThings from "./components/InternetOfThings";
import PrivacyPolicy from "./components/PrivacyPolicy";
const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/careers" element={<Career />} />
            <Route path="/web-dev" element={<WebDev />} />
            <Route path="/app-dev" element={<AppDev />} />
            <Route path="/ai-ml" element={<AIComp />} />
            <Route path="/vision-detail" element={<VisionDetail />} />
            <Route path="/mission-detail" element={<MissionDetail />} />
            <Route path="/visionmissiondetails" element={<VisionMissionDetail />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path={"/job/:jobId"} element={<JobDetails />} />
            <Route path="/server-side-rendering" element={<ServersideRendering />} />
            <Route path="/artificial-intelligence" element={<ArtificialIntelligence />} />
            <Route path="/internet-of-things" element={<InternetOfThings />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
