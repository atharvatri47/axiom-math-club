import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, ArrowRight, Users, Instagram, Lightbulb } from "lucide-react";
import { Button, Input, Textarea } from "../components/ui"; // ✅ fixed import

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Join <span className="bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">AXIOM</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Ready to embark on an exciting mathematical journey? Connect with us and become part 
            of the AXIOM community where logic meets creativity.
          </p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfwRC7jRRf1sZBnQL2RPmBHrLv_Edi3A6F9AuyVXlVi051VWw/viewform?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-12 py-6 rounded-full font-bold text-2xl hover:scale-105 transition-transform duration-200 shadow-2xl shadow-yellow-500/30"
            >
              <Users className="w-8 h-8" />
              Join AXIOM Today
              <ArrowRight className="w-8 h-8" />
            </a>
            <p className="text-gray-400 mt-4 text-lg">
              Click above to access our official registration form
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            {[
              {
                icon: MapPin,
                title: "Location",
                text: ["DPS Dwarka", "New Delhi – 110078", "India"],
                color: "blue"
              },
              {
                icon: Phone,
                title: "Phone",
                text: ["+91 9211601013"],
                color: "yellow"
              },
              {
                icon: Mail,
                title: "Email",
                text: ["axiom@dpsdwarka.edu.in"],
                color: "green"
              }
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-gray-600 transition-colors duration-300"
              >
                <div className={`w-12 h-12 bg-${item.color}-500/20 rounded-lg flex items-center justify-center`}>
                  <item.icon className={`w-6 h-6 text-${item.color}-400`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  {item.text.map((line, j) => (
                    <p key={j} className="text-gray-300">{line}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Instagram */}
            <a
              href="https://www.instagram.com/axiom_dpsdwarka"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-pink-500/50 transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center">
                <Instagram className="w-6 h-6 text-pink-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Instagram</h3>
                <p className="text-gray-300 hover:text-white">@axiom_dpsdwarka</p>
              </div>
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Send us a Message</h2>
            
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                    <Input name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter your full name" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                    <Input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="your.email@example.com" required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                  <Input name="subject" value={formData.subject} onChange={handleInputChange} placeholder="What's this about?" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <Textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Tell us more..." rows={6} required />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" /> Send Message
                </Button>
              </form>
            ) : (
              <div className="text-center text-green-400 font-semibold text-lg">
                ✅ Thank you! Your message has been submitted.
              </div>
            )}

            {/* Suggestion Form */}
            <div className="mt-6 pt-6 border-t border-gray-700">
              <p className="text-gray-400 text-sm mb-3">Or share your suggestions with us:</p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdONiamtcdWZgspw0eXGI7FaFL7JpHgTcZf-XYt0uAk_zXaWw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-medium transition-colors duration-200"
              >
                <Lightbulb className="w-4 h-4" />
                Submit Suggestion Form
              </a>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 border border-gray-700">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Explore Mathematics?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join a community of passionate mathematicians, participate in competitions, 
              and discover the beauty of numbers and logic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfwRC7jRRf1sZBnQL2RPmBHrLv_Edi3A6F9AuyVXlVi051VWw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-200"
              >
                <Users className="w-5 h-5" /> Join Now
              </a>
              <a
                href="mailto:axiom@dpsdwarka.edu.in"
                className="inline-flex items-center gap-2 border border-blue-500 text-blue-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-500/10 transition-colors duration-200"
              >
                <Mail className="w-5 h-5" /> Contact Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
