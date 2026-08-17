import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="section-container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">GET IN TOUCH</span>
          <h2>
            Contact <span>Me</span>
          </h2>
          <p>Have a project in mind? Let's build something amazing together.</p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3>Let's Talk</h3>

            <p>
              I'm always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision.
            </p>

            <div className="contact-item">
              <div className="contact-icon"><FaEnvelope /></div>
              <div>
                <span>Email</span>
                <a href="mailto:ma7moudmo7amed2212@gmail.com">ma7moudmo7amed2212@gmail.com</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon"><FaPhone /></div>
              <div>
                <span>Phone</span>
                <a href="tel:+201000000000">+20 100 1174597</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon"><FaMapMarkerAlt /></div>
              <div>
                <span>Location</span>
                <p>Cairo, Egypt</p>
              </div>
            </div>

            <div className="contact-socials">
              <a href="https://github.com/mm34556464575-spec" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/mahmoud-mohamed-52a5322a2?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" placeholder="Your Name" />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="Your Email" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input id="subject" type="text" placeholder="Project Subject" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="6" placeholder="Write your message..." />
            </div>

            <button type="submit" className="primary-btn">Send Message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
