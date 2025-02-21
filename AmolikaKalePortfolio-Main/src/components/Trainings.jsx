import React from "react";
import { motion } from "framer-motion";

const Trainings = () => {
  return (
    <div
      name="trainings"
      className="w-full min-h-screen bg-primary text-white py-16 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-screen-lg mx-auto flex flex-col justify-center"
      >
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">
            Training & Certifications
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="py-6 space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-tertiary rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-2xl font-bold text-[#915EFF]">
              Web Full Stack Development
            </h3>
            <p className="text-xl text-gray-300">
              <a
                href="https://github.com/Amolika28-Kale/Mern-Food-Delivery-App.git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Mern Food Delivery App (GitHub)
              </a>
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
              <li>Completed hands-on training focused on full-stack development using modern technologies.</li>
              <li>Gained expertise in front-end (HTML5, CSS3, JavaScript, Bootstrap, React.js, jQuery).</li>
              <li>Experienced with back-end technologies (Node.js, Express.js, MongoDB, MySQL,PostgreSql).</li>
            </ul>
          </motion.div>

          {/* Add more training entries as needed */}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Trainings;
