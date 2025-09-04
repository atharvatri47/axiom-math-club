import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Target, Users, Trophy, BookOpen, Lightbulb } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Geometric Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 border border-blue-500/20 rotate-45 animate-pulse"></div>
          <div className="absolute bottom-40 right-20 w-24 h-24 border border-yellow-500/20 rotate-12 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-green-500/20 rotate-45 animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/b01fe91d3_Screenshot2025-09-01134431.png" 
              alt="AXIOM Logo" 
              className="h-20 w-auto mx-auto mb-6 object-contain opacity-80 mix-blend-lighten"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="h-20 w-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-yellow-500 rounded-2xl items-center justify-center text-black font-bold text-3xl hidden">
              A
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-yellow-400 to-green-400 bg-clip-text text-transparent">
                AXIOM
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-2">The Mathematics Club</p>
            <p className="text-lg text-gray-400 mb-8">DPS Dwarka</p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold mb-12 text-white"
          >
            Where Logic Meets <span className="text-yellow-400">Creativity</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            AXIOM is the official Mathematics Club of DPS Dwarka, where numbers, logic, and imagination intersect. 
            Our aim is to make mathematics fun, interactive, and inspiring. From Vedic Maths classes to problem-solving 
            workshops and competitions, we nurture curiosity and sharpen analytical skills for students across grades.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfwRC7jRRf1sZBnQL2RPmBHrLv_Edi3A6F9AuyVXlVi051VWw/viewform?usp=sharing&ouid=116491255979407038247"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-200 flex items-center gap-2"
            >
              Join AXIOM <ArrowRight className="w-5 h-5" />
            </a>
            
            <a
              href="https://drive.google.com/drive/folders/1Vh82yD-rnfo362PzV41fM-pgnqMI96Lm?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-500 text-blue-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-500/10 transition-colors duration-200 flex items-center gap-2"
            >
              Explore Activities
            </a>
            
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeMS2mh5hv0FXAxpsLKrT1RlauovydiUmEnO7OPiMJXiErmLg/viewform?usp=sharing&ouid=116491255979407038247"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-green-500 text-green-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-500/10 transition-colors duration-200 flex items-center gap-2"
            >
              Suggest an Event <Lightbulb className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-500/20 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">32</h3>
              <p className="text-gray-400">Active Members</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-yellow-500/20 rounded-full flex items-center justify-center">
                <Trophy className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">5+</h3>
              <p className="text-gray-400">Annual Fests</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-500/20 rounded-full flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">10+</h3>
              <p className="text-gray-400">Workshops</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-500/20 rounded-full flex items-center justify-center">
                <Target className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">100%</h3>
              <p className="text-gray-400">Dedication</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
