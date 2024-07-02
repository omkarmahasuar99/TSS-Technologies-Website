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
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <img
              src={logo}
              alt="TSS"
              className="w-24 h-24 transition-transform transform hover:scale-110"
            />
            <p className="mt-4">Follow Us On</p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-transform transform hover:scale-110"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-transform transform hover:scale-110"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://instagram.com"
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
          <div>
            <h5 className="text-lg font-semibold mb-3 transition-colors duration-300 hover:text-gray-400">
              Company
            </h5>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-gray-400 transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-400 transition-colors duration-300"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-400 transition-colors duration-300"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-400 transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-3 transition-colors duration-300 hover:text-gray-400">
              Resources
            </h5>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-gray-400 transition-colors duration-300"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-400 transition-colors duration-300"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-400 transition-colors duration-300"
                >
                  FAQs
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
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} TSS Technologies. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
