import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaReact } from "react-icons/fa";

function About() {
  return (
    <section className="about section" id="about">
      <div className="section-container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">ABOUT ME</span>

          <h2>
            Get To Know <span>Me</span>
          </h2>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3>Front-End Developer passionate about building modern web experiences.</h3>

            <p>
              I'm Mahmoud Mohamed, a Front-End Developer focused on building
              modern, responsive, and user-friendly websites and web
              applications.
            </p>

            <p>
              I enjoy turning ideas and designs into clean, interactive
              experiences using React, JavaScript, HTML, and CSS.
            </p>

            <a href="#projects" className="primary-btn">
              Explore My Projects
            </a>
          </motion.div>

          <motion.div
            className="about-cards"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="about-card">
              <FaCode />
              <div>
                <h4>Clean Code</h4>
                <p>Writing organized and maintainable code.</p>
              </div>
            </div>

            <div className="about-card">
              <FaReact />
              <div>
                <h4>React Development</h4>
                <p>Building modern and interactive web applications.</p>
              </div>
            </div>

            <div className="about-card">
              <FaLaptopCode />
              <div>
                <h4>Responsive Design</h4>
                <p>Creating websites that work on every screen.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;