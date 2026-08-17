import { FaGithub, FaLinkedinIn, FaArrowUp } from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          Mahmoud<span>.</span>
        </div>

        <p>
          Front-End Developer building modern and user-friendly web
          experiences.
        </p>

        <div className="footer-socials">
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

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Mahmoud Mohamed. All rights reserved.
          </p>
        </div>
      </div>

      <button
        className="back-to-top"
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
}

export default Footer;