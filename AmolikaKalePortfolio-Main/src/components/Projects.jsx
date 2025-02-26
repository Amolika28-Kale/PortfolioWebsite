import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Food Delivery Website",
      description:
        "Developed a robust food delivery application using the MERN (MongoDB, Express.js, React, Node.js) stack.   Check it Out!!",
      image: "fooddelivery_website.png", // Replace with your image for the Food Delivery Website
      url: "https://github.com/Amolika28-Kale/Mern-Food-Delivery-App.git",
    },
    {
      id: 2,
      title: "ProtfolioWeb",
      description:
        "Personal Portfolio website Developed Using React Js, Javascript, TailwindCSS Check it Out!!",
      image: "portfolioimg.png",
      url: "http://localhost:5173/",
    },
  ];

  return (
    <div
      name="projects"
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
            Projects
          </h2>
          <p className="py-6">Check out some of my work</p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {projects.map(({ id, title, description, image, url }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 * id }}
              className="shadow-md shadow-gray-600 rounded-lg bg-tertiary p-6 hover:shadow-xl transition-shadow"
            >
              <img
                src={image}
                alt={title}
                className="rounded-md duration-200 hover:scale-105 mb-4"
              />
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-lg font-semibold text-[#915EFF]">
                  {title}
                </h3>
                <p className="text-sm text-center p-2 text-gray-300">
                  {description}
                </p>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-2 mt-4 duration-200 hover:scale-105 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md text-center"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;
