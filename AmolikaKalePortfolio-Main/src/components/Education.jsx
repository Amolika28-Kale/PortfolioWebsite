import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div
      name="education"
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
            Education
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
              B.Sc (ECS)
            </h3>
            <p className="text-xl text-gray-300">
              Punyashlok Ahilyadevi Holkar Solapur University
            </p>
            <p className="text-lg">May 2024</p>
            <i>
              Percentage: <b>61.22%</b>
            </i>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-tertiary rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-2xl font-bold text-[#915EFF]">
              12th (Maharashtra State Board)
            </h3>
            <p className="text-xl text-gray-300">
              Maharashtra State Board
            </p>
            <p className="text-lg">Feb 2021</p>
            <i>
              Percentage: <b>80.00%</b>
            </i>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-tertiary rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-2xl font-bold text-[#915EFF]">
              10th (Maharashtra State Board)
            </h3>
            <p className="text-xl text-gray-300">
              Maharashtra State Board
            </p>
            <p className="text-lg">March 2019</p>
            <i>
              Percentage: <b>83.40%</b>
            </i>
          </motion.div>

        </motion.div>
      </motion.div>
    </div>
  );
};

export default Education;
