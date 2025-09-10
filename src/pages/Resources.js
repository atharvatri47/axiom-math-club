import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Download, ExternalLink, Star } from "lucide-react";

const books = [
  {
    title: "Challenges and Thrills of Pre-College Mathematics",
    author: "V. Krishnamurthy, C.R. Pranesachar, K.N. Ranganathan, B.J. Venkatachala",
    description:
      "An excellent resource for mathematical olympiad preparation with challenging problems and detailed solutions.",
    rating: 5,
    category: "Competition Mathematics",
    color: "from-blue-400 to-blue-600",
    bgColor: "bg-blue-500/20",
    link: "https://drive.google.com/drive/folders/15a3uHgrhSpX43cAPZb_QEJuEwASbjgtQ?usp=drive_link",
  },
  {
    title: "Cengage Mathematics",
    author: "G. Tewani",
    description:
      "Comprehensive mathematics series covering all topics for competitive examinations with extensive problem sets.",
    rating: 5,
    category: "Comprehensive Study",
    color: "from-yellow-400 to-yellow-600",
    bgColor: "bg-yellow-500/20",
    link: "https://drive.google.com/drive/folders/15a3uHgrhSpX43cAPZb_QEJuEwASbjgtQ?usp=drive_link",
  },
];

const resources = [
  {
    title: "Mathematical Olympiad Handbooks",
    description: "Collection of handbooks from various mathematical olympiads worldwide",
    icon: BookOpen,
    type: "PDF Collection",
    color: "from-green-400 to-green-600",
    bgColor: "bg-green-500/20",
    link: "https://drive.google.com/drive/folders/15a3uHgrhSpX43cAPZb_QEJuEwASbjgtQ?usp=drive_link",
  },
  {
    title: "Vedic Mathematics Techniques",
    description: "Comprehensive guide to ancient Indian calculation methods",
    icon: Download,
    type: "Study Guide",
    color: "from-purple-400 to-purple-600",
    bgColor: "bg-purple-500/20",
    link: "https://drive.google.com/drive/folders/1lzF8UhZy7znoodcyYZFc4UrfoiAzvpw5?usp=drive_link",
  },
  {
    title: "Problem of the Week Archive",
    description: "Weekly challenging problems with detailed solutions",
    icon: Star,
    type: "Practice Problems",
    color: "from-pink-400 to-pink-600",
    bgColor: "bg-pink-500/20",
    link: "", // Real archive link to be added later
  },
  {
    title: "Submit Weekly Question",
    description: "Contribute a new problem via our submission form",
    icon: ExternalLink,
    type: "Google Form",
    color: "from-indigo-400 to-indigo-600",
    bgColor: "bg-indigo-500/20",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdrGubhQZDkL2mBcbKW-vLGjxEbiNWej29QWUFBk_lKa7PP9A/viewform?usp=sharing",
  },
  {
    title: "Mathematics Competition Links",
    description: "Official websites and registration links for major competitions",
    icon: ExternalLink,
    type: "External Links",
    color: "from-indigo-400 to-indigo-600",
    bgColor: "bg-indigo-500/20",
    link: "https://www.mtai.org.in/",
  },
];

export default function Resources() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Learning{" "}
            <span className="bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
              Resources
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our curated collection of books, study materials, and
            resources to enhance your mathematical journey and competitive
            preparation.
          </p>
        </motion.div>

        {/* Book Recommendations */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-8 text-center"
          >
            Recommended Books
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {books.map((book, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 h-full hover:border-gray-600 hover:scale-105 transition-all duration-300">
                  <div
                    className={`inline-block px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${book.color} text-black mb-4`}
                  >
                    {book.category}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                    {book.title}
                  </h3>
                  <p className="text-blue-400 font-medium mb-4">{book.author}</p>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {book.description}
                  </p>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(book.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                    <span className="text-gray-400 ml-2">
                      ({book.rating}/5)
                    </span>
                  </div>
                  <div>
                    <a
                      href={book.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:scale-105 transition-transform duration-200"
                    >
                      <BookOpen className="w-4 h-4" />
                      Access Materials
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Study Materials */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-8 text-center"
          >
            Study Materials & Links
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 h-full hover:border-gray-600 hover:scale-105 transition-all duration-300">
                  <div
                    className={`w-16 h-16 ${resource.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <resource.icon
                      className={`w-8 h-8 bg-gradient-to-r ${resource.color} bg-clip-text text-transparent`}
                    />
                  </div>
                  <div
                    className={`inline-block px-2 py-1 rounded text-xs font-semibold bg-gradient-to-r ${resource.color} text-black mb-3`}
                  >
                    {resource.type}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                    {resource.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">
                    {resource.description}
                  </p>
                  <a
                    href={resource.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-2 px-4 rounded-lg font-semibold block text-center transition-all duration-200 ${
                      resource.link
                        ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:scale-105"
                        : "bg-gray-700 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    {resource.link ? "Access Resource" : "Coming Soon"}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
