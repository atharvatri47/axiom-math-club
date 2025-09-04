import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Users, BookOpen, Calculator, Target, PartyPopper, Loader } from "lucide-react";

const events = [
  {
    title: "Junior Vedic Maths Classes",
    description: "Comprehensive Vedic Mathematics training for students in Classes 6-8. Learn ancient calculation techniques that make arithmetic faster and more enjoyable.",
    grade: "Classes 6-8",
    startDate: "Starting after 29th September",
    frequency: "4 times a month",
    icon: Calculator,
    color: "from-yellow-400 to-yellow-600",
    bgColor: "bg-yellow-500/20",
    borderColor: "border-yellow-500/30"
  },
  {
    title: "Senior Vedic Maths Classes",
    description: "Advanced Vedic Mathematics sessions for senior students in Classes 9-12. Master complex calculations and develop lightning-fast computational skills.",
    grade: "Classes 9-12",
    startDate: "Starting 29th September onwards",
    frequency: "4 times a month",
    icon: Target,
    color: "from-blue-400 to-blue-600",
    bgColor: "bg-blue-500/20",
    borderColor: "border-blue-500/30"
  },
  {
    title: "AXIOM Annual Fest",
    description: "Our flagship annual event! A celebration of mathematics with competitions, guest speakers, workshops, and fun activities. Check out highlights from last year!",
    grade: "Open to All",
    startDate: "Coming Soon",
    frequency: "Once a year",
    icon: PartyPopper,
    color: "from-green-400 to-green-600",
    bgColor: "bg-green-500/20",
    borderColor: "border-green-500/30",
    link: "https://drive.google.com/drive/folders/15a3uHgrhSpX43cAPZb_QEJuEwASbjgtQ?usp=drive_link",
    linkText: "View Last Year's Highlights"
  },
  {
    title: "More Events Loading...",
    description: "We are busy planning more exciting workshops, competitions, and guest lectures. Stay tuned for updates on what's next!",
    grade: "Coming Soon",
    startDate: "TBA",
    frequency: "...",
    icon: Loader,
    color: "from-gray-400 to-gray-500",
    bgColor: "bg-gray-500/20",
    borderColor: "border-gray-700",
    isLoading: true
  }
];

const EventCard = ({ event }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="group h-full"
  >
    <div className={`relative bg-gray-900/50 backdrop-blur-sm border ${event.borderColor} rounded-2xl p-8 h-full flex flex-col group-hover:scale-105 transition-all duration-300`}>
      {/* Icon and Title */}
      <div className="flex items-start gap-4 mb-6">
        <div className={`w-16 h-16 ${event.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
          <event.icon className={`w-8 h-8 bg-gradient-to-r ${event.color} bg-clip-text text-transparent ${event.isLoading ? "animate-spin" : ""}`} />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
            {event.title}
          </h3>
          <p className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${event.isLoading ? "bg-gray-700 text-gray-300" : `bg-gradient-to-r ${event.color} text-black`}`}>
            {event.grade}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-300 text-lg leading-relaxed mb-6 flex-grow">
        {event.description}
      </p>

      {/* Details */}
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-gray-300">
          <Calendar className="w-5 h-5 text-blue-400" />
          <span>{event.startDate}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-300">
          <Clock className="w-5 h-5 text-green-400" />
          <span>{event.frequency}</span>
        </div>
        {!event.isLoading && (
          <div className="flex items-center gap-3 text-gray-300">
            <BookOpen className="w-5 h-5 text-yellow-400" />
            <span>Interactive learning materials included</span>
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="mt-8 pt-6 border-t border-gray-700">
        <a
          href={event.link || "https://forms.gle/NUDB3hvcMRNZTKr98"}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-200 ${event.isLoading ? "bg-gray-600 cursor-not-allowed" : "bg-gradient-to-r from-yellow-400 to-yellow-500"}`}
        >
          <Users className="w-4 h-4" />
          {event.linkText || "Register Now"}
        </a>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-yellow-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  </motion.div>
);

export default function Events() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Upcoming <span className="bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">Events</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join our exciting mathematics events and workshops designed to enhance your computational skills 
            and deepen your understanding of mathematical concepts.
          </p>
        </motion.div>

        {/* Event Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 border border-gray-700"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Vedic Mathematics?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the power of ancient Indian mathematical techniques that make calculations 
              faster, easier, and more intuitive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-yellow-500/20 rounded-full flex items-center justify-center">
                <Calculator className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Faster Calculations</h3>
              <p className="text-gray-400">Complete arithmetic operations 10-15 times faster than conventional methods.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-500/20 rounded-full flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Enhanced Understanding</h3>
              <p className="text-gray-400">Develop deeper mathematical intuition and pattern recognition skills.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-500/20 rounded-full flex items-center justify-center">
                <Target className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Competitive Edge</h3>
              <p className="text-gray-400">Excel in mathematics competitions and entrance examinations.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
