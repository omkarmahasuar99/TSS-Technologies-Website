import { useState } from "react";
import { RiMapPin2Fill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { LiaMapMarkedAltSolid } from "react-icons/lia";
import Header from "./Header";
import Footer from "./Footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted!", formData);
    setFormData({ name: "", phoneNumber: "", email: "", message: "" });
  };

  return (
    <>
      <Header />
      <div className="w-full h-full bg-black-200 text-white">
        <div className="h-52 w-full text-4xl py-20 px-96 ">
          <p className="mx-52">Contact Us</p>
          <hr className="mt-[25px] w-[300px] ml-[160px]" />
        </div>
        <div className="h-[32rem] w-full flex flex-row">
          <form
            className="flex flex-col mx-[8rem] py-[2rem] transform transition duration-300 hover:scale-110"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="rounded-lg border border-gray-300 p-2 w-[28rem] mb-2"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phoneNumber" className="text-sm font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="rounded-lg border border-gray-300 p-2 w-[28rem] mb-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="rounded-lg border border-gray-300 p-2 w-[28rem] mb-2"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="rounded-lg border border-gray-300 p-2 h-24 resize-none w-[28rem] mb-2"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg w-[28rem] mb-2 mt-[1rem]"
            >
              Send
            </button>
          </form>

          <div className="h-[28rem] w-[36rem]">
            <section className="leading-[23px] transform transition duration-300 hover:scale-110 mt-[3rem]">
              <h1 className="m-5 text-2xl">FAQ</h1>
              <h2 className="ml-[20px]">Where are you located?</h2>
              <p className="mb-[20px] ml-[20px] text-[12px]">
                Our main office is located at 26, 2nd Main, Nila Layout,
                Bettadasanapura Main Rd, Doddathoguru, Bengaluru, Karnataka -
                560100.
              </p>

              <h2 className="ml-[20px]">
                What does TSSTechnologies specialize in?
              </h2>
              <p className="mb-[20px] ml-[20px] text-[12px]">
                TSSTechnologies specializes in developing innovative digital
                products, including mobile applications, web applications, and
                advanced AI & Machine Learning solutions. We focus on delivering
                customized solutions that drive business growth and enhance user
                experiences.
              </p>

              <h2 className="ml-[20px]">
                How does TSSTechnologies ensure the quality of its digital
                products?
              </h2>
              <p className="mb-[20px] ml-[20px] text-[12px]">
                Quality is a top priority at TSSTechnologies. We adhere to
                rigorous testing and validation processes throughout the
                development lifecycle. Our team of experts combines deep
                technical expertise with industry best practices to deliver
                solutions that are reliable, scalable, and user-friendly.
              </p>
            </section>
          </div>
        </div>

        <div className="h-64 w-full flex flex-row px-4 py-4">
          <div className="h-52 w-60 mx-28 my-3 text-center bg-black-400 py-3 border border-green-300 rounded-3xl transform transition duration-300 hover:scale-110">
            <RiMapPin2Fill className="mx-[90px] size-12" />

            <p className="text-sm font-bold my-[10px]">Our Office</p>
            <p className="text-sm">
              #26, 2nd Main, Nila Layout, Bettadasanapura Main Rd. Doddathoguru,
              Bengaluru, Karnataka- 560100
            </p>
          </div>

          <div className="h-52 w-60 mx-28 my-3 text-center bg-black-400 py-3 border border-green-400 rounded-3xl transform transition duration-300 hover:scale-110">
            <MdEmail className="mx-[95px] size-12 mb-[10px] mt-[5px]" />
            <p className="text-sm font-bold mb-[25px]">Email</p>
            {/* <email className="text-[13px]">admincontact@tsstechnologies.in</email> */}
            <a
              className="text-[13px] py-6"
              href="mailto:admincontact@tsstechnologies.in"
            >
              admincontact@tsstechnologies.in
            </a>
          </div>

          <div className="h-52 w-60 mx-28 my-3 text-center bg-black-400 py-3 border border-green-400 rounded-3xl transform transition duration-300 hover:scale-110">
            <FaPhoneVolume className="mx-[94px] size-9 mb-[15px] mt-[15px]" />
            <p className="text-sm font-bold mb-[30px]">Call Us at</p>
            {/* <p>+91 9731041319</p> */}
            <a className="text-[14px] mt-[60px]" href="tel:+91 9731041319">
              +91 9731041319
            </a>
          </div>
        </div>

        <div className="h-[36rem] w-full flex flex-col px-4 py-4  mx-5">
          <div className="text-3xl mx-[550px] my-7 flex flex-row transform transition duration-300 hover:scale-110">
            Locate Us
            <span>
              <LiaMapMarkedAltSolid className="text-color-3 mx-[1rem] size-10" />
            </span>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.9421145305055!2d77.64278198109663!3d12.847015285276944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6b6499dc6609%3A0x2405871511810935!2s2nd%20Main%20Rd%2C%20Electronics%20City%20Phase%201%2C%20Doddathoguru%2C%20Bengaluru%2C%20Karnataka%20560100!5e0!3m2!1sen!2sin!4v1719771112251!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
