import logo from "../assets/image1.jpg"; // Ensure this path is correct
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
 
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col  md:items-start space-y-4 md:space-y-0 md:col-span-1">
            <img
              src={logo}
              alt="tss"
              className="w-28 h-28 transition-transform transform hover:scale-110"
            />
            <h5 className="font-bold text-xl pt-2">tsstechnologies</h5>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-2 transition-colors duration-300 hover:text-gray-400">
              Company
            </h5>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about-us"
                  className="hover:text-gray-400 transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="hover:text-gray-400 transition-colors duration-300"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/contact-us"
                  className="hover:text-gray-400 transition-colors duration-300"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="hover:text-gray-400 transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-3 transition-colors duration-300 hover:text-gray-400">
              Contact Info
            </h5>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                <a
                  href="tel:+91 9731041319"
                  className="hover:text-gray-400 transition-colors duration-300"
                >
                  +91 9731041319
                </a>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                <a
                  href="mailto:admincontact@tsstechnologies.in"
                  className="hover:text-gray-400 transition-colors duration-300"
                >
                  admincontact@tsstechnologies.in
                </a>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                <a
                  href="https://www.google.com/maps/place/tsstechnologies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 transition-colors duration-300"
                >
                  Bangalore, Karnataka, India
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col space-y-4 md:space-y-0 md:col-span-1 md:text-right">
            <div>
              <h5 className="mb-2 mr-15 text-lg font-semibold">Follow us on</h5>
              <div className="flex justify-start md:justify-end space-x-[18px] mt-2 mr-16">
                <a
                  href="https://www.facebook.com/profile.php?id=61556577814647&mibextid=LQQJ4d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 transition-transform transform hover:scale-110"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a
                  href="https://twitter.com/TssTechies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 transition-transform transform hover:scale-110"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                  href="https://www.instagram.com/tsstechies?igsh=OXpnZmg3enBmcGo0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 transition-transform transform hover:scale-110"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 transition-transform transform hover:scale-110"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} DTSSTECHNOLOGIES LLP. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
 
export default Footer;