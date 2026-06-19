import { useState } from "react";
import "./Experience.css";

function Experience() {
    const [activeTab, setActiveTab] = useState("experience");

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
                        <div className="entry">
                            <h3>Software Engineering Intern</h3>
                            <p>Company Name</p>
                            <p>2025</p>
                        </div>

                        <div className="entry">
                            <h3>Full-Stack Developer</h3>
                            <p>Freelance / Academic Projects</p>
                            <p>2024–Present</p>
                        </div>
                    </>
                )}

                {activeTab === "education" && (
                    <>
                        <div className="entry">
                            <h3>B.S. Computer Science</h3>
                            <p>Your University</p>
                            <p>2022–2026</p>
                        </div>
                    </>
                )}

            </div>

        </section>
    );
}

export default Experience;