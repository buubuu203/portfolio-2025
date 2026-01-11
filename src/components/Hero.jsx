import { motion } from "framer-motion";
import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";
import { emoji, emoji1, emoji2 } from "../assets";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* Vertical line and dot */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Text and emoji container */}
        <div className="flex flex-col">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Dang</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Tech Product Owner focused on system-driven platforms. Experienced
            in building high-traffic consumer products and internal operational
            tools that scale under real-world constraints.{" "}
            <br className="sm:block hidden" />
          </p>

          {/* Center the emoji horizontally */}
          <div className="flex justify-center mt-8 gap-12">
            {/* Emoji 1 */}
            <motion.div
              whileHover={{ scale: 1.2, rotate: 20 }} // Scale up and rotate on hover
              transition={{ type: "spring", stiffness: 300 }} // Spring animation
              style={{ display: "inline-block" }} // Ensure the div behaves like an inline element
            >
              <img
                src={emoji}
                alt="emoji"
                className="sm:w-56 md:w-72 w-28 cursor-pointer" // Adjust size as needed
              />
            </motion.div>

            {/* Emoji 2 */}
            <motion.div
              whileHover={{ scale: 1.2, rotate: -20 }} // Scale up and rotate on hover
              transition={{ type: "spring", stiffness: 300 }} // Spring animation
              style={{ display: "inline-block" }} // Ensure the div behaves like an inline element
            >
              <img
                src={emoji1}
                alt="emoji"
                className="sm:w-56 md:w-72 w-28 cursor-pointer" // Adjust size as needed
              />
            </motion.div>

            {/* Emoji 3 */}
            <motion.div
              whileHover={{ scale: 1.2, rotate: 20 }} // Scale up and rotate on hover
              transition={{ type: "spring", stiffness: 300 }} // Spring animation
              style={{ display: "inline-block" }} // Ensure the div behaves like an inline element
            >
              <img
                src={emoji2}
                alt="emoji"
                className="sm:w-56 md:w-72 w-28 cursor-pointer" // Adjust size as needed
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* <ComputersCanvas />*/}

      {/* Scroll indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
