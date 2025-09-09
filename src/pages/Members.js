import React from "react";
import { motion } from "framer-motion";

// Import member images
import atharv from "../assets/members/atharvatri.jpg";
import sanvi from "../assets/members/sanvisachdeva.jpg";
import shubana from "../assets/members/shubanaggarwal.jpg";
import reyansh from "../assets/members/reyanshmunjal.jpg";
import gurnoor from "../assets/members/gurnoorbhatia.jpg";
import aadvik from "../assets/members/aadviknautiyal.jpg";

const members = [
  { name: "Sanvi Sachdeva", role: "President", position: "top", image: sanvi },
  { name: "Shuban Aggarwal", role: "President", position: "top", image: shubana },
  { name: "Atharv Atri", role: "Vice President", position: "second", image: atharv },
  { name: "Reyansh Munjal", role: "Vice President", position: "second", image: reyansh },
  { name: "Gurnoor Bhatia", role: "Vice President", position: "second", image: gurnoor },
  { name: "Aadvik Nautiyal", role: "Vice President", position: "second", image: aadvik },
];

export default function Members() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Page Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">Team</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the dedicated leaders who drive AXIOM's mission to make mathematics 
            accessible, engaging, and inspiring for all students.
          </p>
        </motion.div>

        {/* Presidents Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-12 md:gap-20 mb-16"
        >
          {members.filter(m => m.position === "top").map((member, index) => (
            <div key={index} className="group text-center">
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-yellow-400 font-semibold text-lg">{member.role}</p>
            </div>
          ))}
        </motion.div>

        {/* Vice Presidents Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {members.filter(m => m.position === "second").map((member, index) => (
            <div key={index} className="group text-center">
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-lg group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-blue-400 font-semibold">{member.role}</p>
            </div>
          ))}
        </motion.div>

        {/* Closing Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 border border-gray-700">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Leadership Excellence
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our team consists of passionate mathematics enthusiasts who are dedicated to creating 
              an inclusive and inspiring environment. Each leader brings unique skills and perspectives 
              to ensure AXIOM continues to excel in mathematical education and competition.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
