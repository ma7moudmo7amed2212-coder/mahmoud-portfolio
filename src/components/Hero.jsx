import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaArrowDown,
} from "react-icons/fa";
import profileImage from "../assets/mahmoud.jpg";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-glow glow-1"></div>
      <div className="hero-glow glow-2"></div>

      <div className="hero-content">
        {/* Hero Text */}
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="hero-intro">👋 Hello, I'm</p>

          <h1>
            Mahmoud <span>Mohamed</span>
          </h1>

          <h2>Front-End Developer</h2>

          <p className="hero-description">
            I build modern, responsive, and user-friendly web experiences
            using React and modern front-end technologies.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View My Work
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="image-glow"></div>

          <img
            src={profileImage}
            alt="Mahmoud Mohamed"
            className="hero-image"
          />
        </motion.div>
      </div>

      <a href="#about" className="scroll-down">
        <span>Scroll Down</span>
        <FaArrowDown />
      </a>
    </section>
  );
}

export default Hero;