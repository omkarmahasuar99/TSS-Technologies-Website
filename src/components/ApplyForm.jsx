import { useState } from "react";
import { motion } from "framer-motion";
import Modal from "react-modal";

const ApplyForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Resume:", resume);
    setModalIsOpen(true);
  };

  return (
    <>
      <motion.div
        className="apply-form mt-12 p-8 bg-white rounded-xl shadow-lg max-w-lg mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">
          Apply Now
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <motion.input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 p-3 block w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 text-black bg-gray-100"
              required
              whileFocus={{ scale: 1.02 }}
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <motion.input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-3 block w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 text-black bg-gray-100"
              required
              whileFocus={{ scale: 1.02 }}
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Resume
            </label>
            <motion.input
              type="file"
              onChange={(e) => setResume(e.target.files[0])}
              className="mt-1 block w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 text-black bg-gray-100"
              required
              whileFocus={{ scale: 1.02 }}
            />
          </div>
          <motion.button
            type="submit"
            className="block w-1/2 mx-auto py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="flex items-center justify-center fixed inset-0 bg-gray-800 bg-opacity-75 z-50"
      >
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Application Submitted
          </h2>
          <p className="text-gray-700">
            Your application has been submitted successfully!
          </p>
          <button
            onClick={() => setModalIsOpen(false)}
            className="mt-6 w-full py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200"
          >
            Close
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ApplyForm;
