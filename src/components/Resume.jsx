import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import resume from "../assets/resume.pdf";

const Resume = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Professional Journey</p>
          <h2 className={styles.sectionHeadText}>Resume.</h2>
        </motion.div>
      </div>
      <div
        className={`-mt-20 pb-14 ${styles.paddingX} flex flex-col items-center`}
      >
        <iframe
          src={`${resume}#toolbar=0&view=FitH,100`}
          width="100%"
          height="500px"
          style={{ border: "none" }} // Loại bỏ viền mặc định
        />

        {/* Download Button */}
        <motion.div
          variants={fadeIn("up", "spring", 0.5, 0.75)}
          className="mt-10"
        >
          <a
            href={resume}
            download="ChauNgocBuuDang_TechProductOwner_CV.pdf"
            className="hover:bg-[#804dee] text-white font-bold py-2 px-4 rounded"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Resume, "");
