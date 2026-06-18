import './Hero.css';
import profilePic from "../assets/profile.jpg";

import { FiDownload, FiMail, FiLinkedin, FiGithub } from "react-icons/fi";

const buttons = [
  { label: "Resume", icon: <FiDownload />, link: "/resume.pdf", showLabel: true },
  { icon: <FiMail />, link: "mailto:lantisfernandez29@gmail.com", showLabel: false },
  { icon: <FiLinkedin />, link: "https://www.linkedin.com/in/lantisfernandez/", showLabel: false },
  { icon: <FiGithub />, link: "https://github.com/lanseudesu", showLabel: false },
];


function Hero() {
  return (
    <section className="wrapper hero">
      <div className="hero-layout">

        <div className="hero-content">
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
                {btn.showLabel && (
                  <span className="resume-text">{btn.label}</span>
                )}
              </a>
            ))}
          </div>
        </div>

        <div className="hero-image">
          <img src={profilePic} alt="Lantis Fernandez" />
        </div>

      </div>
    </section>
  );
}

export default Hero;