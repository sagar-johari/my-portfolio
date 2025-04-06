"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export const NewsletterForm = () => {
  const [focused, setFocused] = useState({
    email: false,
  });

  const [formData, setFormData] = useState({
    email: "",
  });

  const labelVariants = {
    default: { y: -18, scale: 0.7, color: "#666" },
    placeholder: { y: 0, scale: 1, color: "#999" },
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
    <form className="w-full max-w-2xl mx-auto border-t-2  font-jetBrainsMono footer-contact h-[60%] flex flex-col justify-end h-fit">
      {/* Full Name Input */}
      <div className="flex flex-col space-y-4">
        {/* Email Input */}
        <div className="relative pt-[20px]">
          <motion.label
            htmlFor="email"
            initial="placeholder"
            animate={
              focused.email || formData.email ? "default" : "placeholder"
            }
            variants={labelVariants}
            transition={{ duration: 0.2 }}
            className="absolute left-3 pointer-events-none"
          >
            Your Email Address
          </motion.label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={() => handleFocus("email")}
            onBlur={() => handleBlur("email")}
            className="w-full px-3 pb-4 bg-transparent border-b-2 border-gray-300 outline-none"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full h-[60px] py-4 bg-theme_accent text-white hover:bg-opacity-90 transition-all duration-200"
      >
        Subscribe
      </button>
    </form>
  );
};
