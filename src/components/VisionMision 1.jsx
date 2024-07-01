/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from "react-router-dom";
import "../constants/vision 1.css";

export default function VisionMision() {
  const navigate = useNavigate();

  return (
    <>
      <div className="base">
        <div className="card" onClick={() => navigate("/vision-detail")}>
          <div className="card2">
            <h2 className="headingVision">Vision</h2>
            <p className="para">
              At tsstechnologies, we envision a future where innovation and
              technology converge to transform businesses and enrich lives,
              creating a better tomorrow for all.
            </p>
            <button className="knowMoreButton">Know More</button>
          </div>
        </div>
        <div className="card" onClick={() => navigate("/mission-detail")}>
          <div className="card2">
            <h2 className="headingVision">Mission</h2>
            <p className="para">
              "Our mission is to empower business to reach new heights by
              delivering cutting-edge solutions, and unparalleled expertise,
              success, and sustainability for our clients and community."
            </p>
            <button className="knowMoreButton">Know More</button>
          </div>
        </div>
      </div>
    </>
  );
}
