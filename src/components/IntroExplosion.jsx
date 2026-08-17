import { useEffect, useState } from "react";
import "./IntroExplosion.css";

function IntroExplosion() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="intro-explosion">
      <div className="explosion-core"></div>

      <div className="explosion-ring ring-1"></div>
      <div className="explosion-ring ring-2"></div>
      <div className="explosion-ring ring-3"></div>

      <div className="explosion-particles">
        {Array.from({ length: 30 }).map((_, i) => (
          <span key={i} style={{ "--i": i }}></span>
        ))}
      </div>

      <div className="explosion-flash"></div>
    </div>
  );
}

export default IntroExplosion;