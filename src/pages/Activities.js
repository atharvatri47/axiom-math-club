import React from "react";
import { motion } from "framer-motion";
import { Trophy, Users, Brain, Calculator, Target, Lightbulb, ExternalLink } from "lucide-react";

const activities = [
  {
    icon: Calculator,
    title: "Vedic Mathematics",
    description: "Learn ancient calculation techniques that make complex arithmetic simple and fun.",
    color: "from-yellow-400 to-yellow-600",
    bgColor: "bg-yellow-500/20",
    link: "https://www.vedicmaths.org/"
  },
  {
    icon: Trophy,
    title: "Math Competitions",
    description: "Participate in inter-school and national level mathematics competitions.",
    color: "from-blue-400 to-blue-600",
    bgColor: "bg-blue-500/20"
  },
  {
    icon: Brain,
    title: "Problem Solving Workshops",
    description: "Develop analytical thinking through challenging mathematical puzzles.",
    color: "from-green-400 to-green-600",
    bgColor: "bg-green-500/20"
  },
  {
    icon: Users,
    title: "Group Study Sessions",
    description: "Collaborative learning environment for tackling difficult concepts together.",
    color: "from-purple-400 to-purple-600",
    bgColor: "bg-purple-500/20"
  },
  {
    icon: Lightbulb,
    title: "Math Innovation Projects",
    description: "Apply mathematical concepts to real-world problems and create innovative solutions.",
    color: "from-pink-400 to-pink-600",
    bgColor: "bg-pink-500/20"
  },
  {
    icon: Target,
    title: "Puzzle Challenges",
    description: "Weekly mathematical puzzles and brain teasers to keep minds sharp.",
    color: "from-red-400 to-red-600",
    bgColor: "bg-red-500/20",
    link: "https://www.mathsisfun.com/puzzles/"
  }
];

export default function Activities() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/b01fe91d3_Screenshot2025-09-01134431.png" 
            alt="AXIOM Logo" 
            className="h-16 w-auto mx-auto mb-6 object-contain opacity-80 mix-blend-lighten"
          />

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            What We <span className="bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">Do</span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-400 via-blue-400 to-green-400 bg-clip-text text-transparent mb-6"
          >
            #AXIOM: Where Logic Meets Innovation
          </motion.p>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the exciting world of mathematics through our diverse range of activities, 
            competitions, and learning opportunities designed to inspire and challenge young minds.
          </p>
        </motion.div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative flex flex-col"
            >
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 h-full hover:border-gray-600 transition-all duration-300 hover:scale-105 flex flex-col flex-grow">
                {/* Background watermark */}
                <div className="absolute top-4 right-4 opacity-5 pointer-events-none">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/b01fe91d3_Screenshot2025-09-01134431.png" 
                    alt="AXIOM Logo" 
                    className="h-12 w-auto object-contain"
                  />
                </div>

                <div className={`w-16 h-16 ${activity.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                  <activity.icon className={`w-8 h-8 bg-gradient-to-r ${activity.color} bg-clip-text text-transparent`} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300 relative z-10">
                  {activity.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed flex-grow relative z-10">
                  {activity.description}
                </p>

                {activity.link && (
                  <a
                    href={activity.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-200 relative z-10"
                  >
                    {activity.title === "Vedic Mathematics" ? "Learn More" : "Try Puzzles"} 
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-yellow-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 border border-gray-700 relative overflow-hidden">
            {/* Background logo */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/b01fe91d3_Screenshot2025-09-01134431.png" 
                alt="AXIOM Logo" 
                className="h-32 w-auto object-contain"
              />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Join the Mathematical Journey?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Experience mathematics like never before. Join AXIOM and discover the beauty of numbers, logic, and problem-solving.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfwRC7jRRf1sZBnQL2RPmBHrLv_Edi3A6F9AuyVXlVi051VWw/viewform?usp=sharing&ouid=116491255979407038247"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-200"
              >
                <Trophy className="w-5 h-5" />
                Join AXIOM Today
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
