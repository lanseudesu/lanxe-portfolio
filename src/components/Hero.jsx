import profilePic from "../assets/profile.jpg";

import { FiDownload, FiMail, FiLinkedin, FiGithub } from "react-icons/fi";

const buttons = [
  { label: "Resume", icon: <FiDownload />, link: "/resume.pdf", showLabel: true },
  { icon: <FiMail />, link: "mailto:you@email.com", showLabel: false },
  { icon: <FiLinkedin />, link: "https://linkedin.com", showLabel: false },
  { icon: <FiGithub />, link: "https://github.com", showLabel: false },
];


function Hero() {
  return (
    <section className="wrapper hero">
      <div className="grid">

        <h1 className="hero-title">
          Hi, I'm Lantis Fernandez
        </h1>

        <p className="hero-subtitle">
          an aspiring Backend | Full-Stack Developer
        </p>

        <div className="hero-status">
          OPEN TO WORK
        </div>

        <div className="button-group">
          {buttons.map((btn, index) => (
            <a
              key={index}
              className={`resume-button ${!btn.showLabel ? "icon-only" : ""}`}
              href={btn.link}
              target="_blank"
              rel="noreferrer"
            >
              {btn.icon}
              {btn.showLabel && <span className="resume-text">{btn.label}</span>}
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Hero;