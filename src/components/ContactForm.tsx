"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export const ContactForm = () => {
  const [focused, setFocused] = useState({
    fullname: false,
    email: false,
    subject: false,
    message: false,
  });

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });

  const labelVariants = {
    default: { y: -18, scale: 0.7, color: "#666" },
    placeholder: { y:0, scale: 1, color: "#999" },
  };

  const handleFocus = (field: keyof typeof focused) => {
    setFocused((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field: keyof typeof focused) => {
    if (!formData[field]) {
      setFocused((prev) => ({ ...prev, [field]: false }));
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className="w-full max-w-2xl mx-auto  font-jetBrainsMono footer-contact h-[60%] flex flex-col justify-between">
      {/* Full Name Input */}
      <div className="flex flex-col space-y-4">

      <div className="relative mt-[1rem]">
        <motion.label
          htmlFor="fullname"
          initial="placeholder"
          animate={focused.fullname || formData.fullname ? "default" : "placeholder"}
          variants={labelVariants}
          transition={{ duration: 0.2 }}
          className="absolute left-3 pointer-events-none"
        >
          Full Name
        </motion.label>
        <input
          type="text"
          id="fullname"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
          onFocus={() => handleFocus("fullname")}
          onBlur={() => handleBlur("fullname")}
          className="w-full px-3 pb-4 bg-transparent border-b-2 border-gray-300   outline-none"
        />
      </div>

      {/* Email Input */}
      <div className="relative">
        <motion.label
          htmlFor="email"
          initial="placeholder"
          animate={focused.email || formData.email ? "default" : "placeholder"}
          variants={labelVariants}
          transition={{ duration: 0.2 }}
          className="absolute left-3 pointer-events-none"
        >
          Email
        </motion.label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onFocus={() => handleFocus("email")}
          onBlur={() => handleBlur("email")}
          className="w-full px-3 pb-4 bg-transparent border-b-2 border-gray-300   outline-none"
        />
      </div>

      {/* Subject Input */}
      <div className="relative">
        <motion.label
          htmlFor="subject"
          initial="placeholder"
          animate={focused.subject || formData.subject ? "default" : "placeholder"}
          variants={labelVariants}
          transition={{ duration: 0.2 }}
          className="absolute left-3 pointer-events-none"
        >
          Subject
        </motion.label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          onFocus={() => handleFocus("subject")}
          onBlur={() => handleBlur("subject")}
          className="w-full px-3 pb-4 bg-transparent border-b-2 border-gray-300   outline-none"
        />
      </div>

      {/* Message Input */}
      <div className="relative flex">
        <motion.label
          htmlFor="message"
          initial="placeholder"
          animate={focused.message || formData.message ? "default" : "placeholder"}
          variants={labelVariants}
          transition={{ duration: 0.2 }}
          className="absolute left-3 pointer-events-none"
        >
          Message
        </motion.label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onFocus={() => handleFocus("message")}
          onBlur={() => handleBlur("message")}
          rows={3}
          className="w-full px-4 py-4 bg-transparent border-b-2 border-gray-300   outline-none resize-none h-full"
        />
      </div>
      </div>

      <button
        type="submit"
        className="w-full h-[80px] py-4 bg-theme_accent text-white hover:bg-opacity-90 transition-all duration-200 h-full"
      >
        Send Message
      </button>
    </form>
  );
}; 