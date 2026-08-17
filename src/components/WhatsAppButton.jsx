import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/201001174597"
      target="_blank"
      rel="noreferrer"
      className="whatsapp-button"
      aria-label="Contact me on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsAppButton;