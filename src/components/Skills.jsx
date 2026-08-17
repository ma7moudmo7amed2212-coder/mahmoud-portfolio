import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

function Skills() {
  const skills = [
    {
      name: "HTML5",
      icon: <FaHtml5 />,
      description: "Building well-structured web pages",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt />,
      description: "Creating modern and responsive designs",
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      description: "Building interactive web experiences",
    },
    {
      name: "React",
      icon: <FaReact />,
      description: "Developing modern web applications",
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
      description: "Version control and project management",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      description: "Hosting and managing projects",
    },
  ];

  return (
    <section className="skills section" id="skills">
      <div className="section-container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">MY SKILLS</span>

          <h2>
            Technologies I <span>Use</span>
          </h2>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              className="skill-card"
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <div className="skill-icon">
                {skill.icon}
              </div>

              <h3>{skill.name}</h3>

              <p>{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;