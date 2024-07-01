import logo from "../assets/image1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-n-8/90 backdrop-blur-sm text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col">
            <img src={logo} alt="TSS" className="w-16 h-16 mb-4" />
            <p className="text-lg font-semibold">TSS Technologies</p>
            <p className="text-sm mt-2">Innovating the future of products.</p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Company</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Our Vission
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Our Mission
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Products</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Web development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  App development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Data Science and AI
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Research Development
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Resources</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} TSS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
