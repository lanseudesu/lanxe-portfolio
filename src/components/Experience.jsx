import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";

import companyLogo from "../assets/profile.jpg";
import "./Experience.css";

function Experience() {
    const [activeTab, setActiveTab] = useState("experience");

    const experiences = [
        {
            company: "AltPayNet Corp.",
            role: "Development, Security and Operations Intern",
            date: "2025",
            logo: companyLogo,
            highlights: [
            "Enhanced the UI/UX and mobile responsiveness of company microsites, including APAS and E-Snapped.",
            "Integrated CDN solutions and collaborated with the development team through Agile sprint planning and development cycles.",
            "Built a Java Spring Boot application featuring CRUD operations, authentication, and database integration."
            ],
            links: [
            {
                label: "APAS",
                url: "https://apasuite.io/"
            },
            {
                label: "E-Snapped",
                url: "https://e-snapped.com"
            }
        ]
        }
    ];

    const educations = [
        {
            school: "Pamantasan ng Lungsod ng Maynila",
            degree: "B.S. Computer Science",
            date: "2022–2026",
            logo: companyLogo,
            highlights: [
                "Graduated Magna Cum Laude with 1.33 GWA.",
                "Developed an undergraduate thesis on retinal image feature extraction using computer vision and Python.",
                "Developed full-stack applications involving React, Django, PostgreSQL, and database management.",
                "Relevant coursework included Data Structures and Algorithms, Database Systems, Software Engineering, Computer Networks, and Artificial Intelligence."
            ]
        },
        {
            school: "Polytechnic University of the Philippines",
            degree: "SHS-STEM",
            date: "2020-2022",
            logo: companyLogo,
            highlights: [
                "Graduated with high honors."
            ]
        }
    ];

    return (
        <section className="wrapper experience-section">

            <div className="tab-buttons">
                <button
                    className={activeTab === "experience" ? "active" : ""}
                    onClick={() => setActiveTab("experience")}
                >
                    Experience
                </button>

                <button
                    className={activeTab === "education" ? "active" : ""}
                    onClick={() => setActiveTab("education")}
                >
                    Education
                </button>
            </div>

            <div className="info-box">

                {activeTab === "experience" && (
                    <>
                        {experiences.map((experience, index) => (
                        <div className="entry" key={index}>

                            <img
                            className="company-logo"
                            src={experience.logo}
                            alt={`${experience.company} logo`}
                            />

                            <div className="entry-content">

                            <div className="entry-header">
                                <div>
                                <h3>{experience.company}</h3>
                                <p className="entry-role">
                                    {experience.role}
                                </p>
                                </div>

                                <span className="entry-date">
                                {experience.date}
                                </span>
                            </div>

                            <ul className="entry-highlights">
                                {experience.highlights.map((highlight, index) => (
                                <li key={index}>
                                    {highlight}
                                </li>
                                ))}
                            </ul>

                            {experience.links && (
                                <div className="entry-links">
                                    {experience.links.map((link, index) => (
                                        <a
                                            key={index}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="entry-link"
                                        >
                                            {link.label}
                                            <FiExternalLink />
                                        </a>
                                    ))}
                                </div>
                            )}

                            </div>
                        </div>
                        ))}
                    </>
                    )}

               {activeTab === "education" && (
                    <>
                        {educations.map((education, index) => (
                            <div className="entry" key={index}>

                                <img
                                    className="company-logo"
                                    src={education.logo}
                                    alt={`${education.school} logo`}
                                />

                                <div className="entry-content">

                                    <div className="entry-header">
                                        <div>
                                            <h3>{education.school}</h3>

                                            <p className="entry-role">
                                                {education.degree}
                                            </p>
                                        </div>

                                        <span className="entry-date">
                                            {education.date}
                                        </span>
                                    </div>

                                    <ul className="entry-highlights">
                                        {education.highlights.map((highlight, index) => (
                                            <li key={index}>
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>

                                </div>
                            </div>
                        ))}
                    </>
                )}
            </div>

        </section>
    );
}

export default Experience;