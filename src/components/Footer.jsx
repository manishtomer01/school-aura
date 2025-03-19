import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import fb from "../assets/fb.png";
import whatsapp from "../assets/whatsapp.png";
import insta from "../assets/insta.png";
import twitter from "../assets/twitter.png";
const Footer = ({ elementsRef }) => {
  return (
    <footer className="bg-[#0c0c23] text-gray-200 pt-10">
      <div
        ref={(el) => (elementsRef.current[13] = el)}
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {/* About Us */}
        <div>
          <h2 className="text-xl font-semibold text-orange-500">About US</h2>
          <p className="mt-3 text-gray-400">
            SchoolAura Smart Education Platform is a step towards making
            learning better and effective for the students and helps to achieve
            their goals.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold text-orange-500">Quick Links</h2>
          <ul className="mt-3 space-y-2">
            {["About Us", "Benefits", "Blogs", "Testimonials", "Features"].map(
              (link, index) => (
                <li
                  key={index}
                  className="hover:text-white text-gray-400 flex items-center gap-2 transition"
                >
                  <MdOutlineKeyboardArrowRight className="text-orange-500 text-xl" />
                  <div>{link}</div>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Help & Support */}
        <div>
          <h2 className="text-xl font-semibold text-orange-500">
            Help &amp; Support
          </h2>
          <ul className="mt-3 space-y-2">
            {[
              "Services",
              "Support",
              "Terms & Conditions",
              "Privacy Policy",
              "Sitemap",
            ].map((link, index) => (
              <li
                key={index}
                className="hover:text-white text-gray-400 flex items-center gap-2 transition"
              >
                <MdOutlineKeyboardArrowRight className="text-orange-500 text-xl" />
                <div>{link}</div>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h2 className="text-xl font-semibold text-orange-500">Follow Us</h2>
          <div className="mt-3 flex space-x-4">
            <a href="#" className="rounded-full hover:scale-110 transition">
              <img src={fb} alt="" />
            </a>
            <a href="#" className="rounded-full hover:scale-110 transition">
              <img src={insta} alt="" />
            </a>
          </div>
          <div className="mt-3 flex space-x-4">
            <a href="#" className="rounded-full hover:scale-110 transition">
              <img src={twitter} alt="" />
            </a>
            <a href="#" className="rounded-full hover:scale-110 transition">
              <img src={whatsapp} alt="" />
            </a>
          </div>
        </div>
      </div>

      {/* Contact Details */}
      <div className="max-w-7xl mx-auto px-6 mt-10 border-t border-gray-600 pt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Call Us */}
        <div className="flex items-center space-x-4 justify-center md:justify-start">
          <div className="bg-gray-700 p-3 rounded-full">
            <FaPhoneAlt className="text-white text-2xl" />
          </div>
          <div>
            <h3 className="text-orange-500 font-semibold">CALL US</h3>
            <p className="text-blue-400 hover:underline">+91-9540349392</p>
          </div>
        </div>

        {/* Mail Us */}
        <div className="flex items-center space-x-4 justify-center md:justify-start">
          <div className="bg-gray-700 p-3 rounded-full">
            <FaEnvelope className="text-white text-2xl" />
          </div>
          <div>
            <h3 className="text-orange-500 font-semibold">MAIL US</h3>
            <p className="text-blue-400 hover:underline">
              contact@schoolaura.com
            </p>
          </div>
        </div>

        {/* Office Address */}
        <div className="flex items-center space-x-4 justify-center md:justify-start">
          <div className="bg-gray-700 p-3 rounded-full">
            <FaMapMarkerAlt className="text-white text-2xl" />
          </div>
          <div>
            <h3 className="text-orange-500 font-semibold">Office Address</h3>
            <p className="text-gray-400">
              E 44/3, Pocket D, Okhla Phase II, Okhla Industrial Area, New
              Delhi, Delhi 110020, India
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center text-white text-lg p-10 bg-[#06091cff] flex items-center justify-around border-t border-gray-700 py-8">
        <p>2021 © SchoolAura. All Rights Reserved</p>
        <p className="mt-1">
          Design &amp; Development by{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Insoftlink Software
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
