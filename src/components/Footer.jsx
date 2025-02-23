import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { HiMail, HiPhone } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="relative w-full bg-tertiary py-8 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Contact Information */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="flex items-center gap-2">
            <HiPhone className="text-white w-5 h-5" />
            <a
              href="tel:+84375567003"
              className="text-white text-sm hover:text-[#915EFF] transition"
            >
              +84 917 192 680
            </a>
          </div>

          {/* Phần email */}
          <div className="flex items-center gap-2">
            <HiMail className="text-white w-5 h-5" />
            <a
              href="mailto:work.dangchau2003@gmail.com"
              className="text-white text-sm hover:text-[#915EFF] transition"
            >
              work.dangchau2003@gmail.com
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://www.linkedin.com/in/dangchau2003/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-white w-6 h-6 hover:text-[#0A66C2] transition" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://github.com/buubuu203"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-white w-6 h-6 hover:text-[#333] transition" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://www.facebook.com/buu.buu.9083"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-white w-6 h-6 hover:text-[#1877F2] transition" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://www.instagram.com/buubuu.u"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-white w-6 h-6 hover:text-[#E1306C] transition" />
          </motion.a>
        </div>
      </div>

      {/* Copyright Text */}
      <div className="mt-8 text-center">
        <p className="text-white text-sm opacity-70">
          © 2025 Dang Chau. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
