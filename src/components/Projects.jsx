import {useEffect, useRef, useState} from "react";
import "./Projects.css";
import { FiExternalLink } from "react-icons/fi";

import thesisPic from "../assets/projects/thesis.png";
import ludusPic from "../assets/projects/ludus.png";
import dinoPic from "../assets/projects/dinosaur.png";
import mafaPic from "../assets/projects/mafa.png";
import mathPic from "../assets/projects/math.png";
import kinetiqPic from "../assets/projects/kinetiq.png";

const projects = [
    {
        title: "Enhanced ORB for Retinal Image Feature Extraction",
        stack: "Computer Vision · Undergraduate Thesis · Python",
        date: "2025–2026",
        image: thesisPic,
        url: "https://doi.org/10.36948/ijfmr.2026.v08i01.70140",
        highlights: [
            "Enhanced the ORB algorithm using adaptive thresholding, descriptor refinement, and redundancy suppression.",
            "Improved keypoint distribution and feature matching accuracy for retinal image analysis.",
            "Implemented and evaluated the approach using Python, OpenCV, and NumPy."
        ]
    },

    {
        title: "Ludus Compiler",
        stack: "Full-Stack · Language Design · Interpreter · Python",
        date: "2025",
        image: ludusPic,
        url: "https://github.com/lanseudesu/Ludus",
        highlights: [
            "Developed a custom programming language and compiler.",
            "Complete with lexical analysis, parsing, semantic analysis, AST generation, and interpreter execution.",
            "Built runtime input handling and compiler tooling using Python, Eel, JavaScript, and HTML/CSS."
        ]
    },

    {
        title: "T-Rex Assembly Game",
        stack: "Game Development · Full-Stack · 8086 Assembly",
        date: "2024",
        image: dinoPic,
        url: "https://github.com/lanseudesu/Dinosaur-Game-ASM-Project",
        highlights: [
            "Recreated the Chrome Dinosaur Game entirely in 8086 assembly language using TASM and DOSBox.",
            "Implemented low-level game mechanics, collision handling, and rendering logic."
        ]
    },

    {
        title: "MAFA Property Management System",
        stack: "Full-Stack · React · ExpressJS · Supabase",
        date: "2025",
        image: mafaPic,
        url: "https://github.com/CoderTofu/MAFA-Inventi",
        highlights: [
            "Property management system for Inventi Hackathon built with React, ExpressJS, and Supabase.",
            "Web app that enables property managers to upload floor plans and track maintenance issues using an interactive map interface."
        ]
    },

    {
        title: "Math and Match Memory Card Game",
        stack: "Full-Stack · Mobile · Game Development · Flutter",
        date: "2025",
        image: mathPic,
        url: "https://github.com/lanseudesu/Math-and-Match",
        highlights: [
            "Full-stack and lead developer for a mobile memory card game built with Flutter.",
            "Designed and implemented game mechanics, user interface, and backend services for player data management."
        ]
    },

    {
        title: "Kinetiq",
        stack: "Full-Stack · React · Database Management · Django · PostgreSQL",
        date: "2025",
        image: kinetiqPic,
        url: "https://github.com/Kinetiq-PLM/kinetiq-frontend",
        highlights: [
            "Built RESTful backend services using Django and PostgreSQL and integrated frontend components with backend APIs.",
            "Deployed serverless infrastructure using AWS and Zappa."
        ]
    }
];

function Projects() {
    const [activeProject, setActiveProject] = useState(0);
    const projectsContentRef = useRef(null);

    useEffect(() => {
        const container = projectsContentRef.current;

        if (!container) return;

        const handleScroll = () => {
            const cards = container.querySelectorAll(".project-card");

            const containerRect = container.getBoundingClientRect();
            const containerCenter = containerRect.top + containerRect.height / 2;

            let closestIndex = 0;
            let closestDistance = Infinity;

            cards.forEach((card, index) => {
                const cardRect = card.getBoundingClientRect();
                const cardCenter = cardRect.top + cardRect.height / 2;

                const distance = Math.abs(cardCenter - containerCenter);

                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestIndex = index;
                }
            });

            setActiveProject(closestIndex);
        };

        container.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {
            container.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section className="wrapper projects">

            <h2 className="projects-heading">
                Featured Projects
            </h2>

            <div className="projects-layout"  ref={projectsContentRef}>
                <div className="projects-content">
                    {projects.map((project, index) => (
                        <article
                            className="project-card"
                            key={project.title}
                            data-index={index}
                        >
                            <h2 className="project-title">
                                {project.title}
                            </h2>

                            <p className="project-stack">
                                {project.stack}
                            </p>

                            <div className="project-meta">
                                <p className="project-date">{project.date}</p>

                                {project.url && (
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="visit-project"
                                    >
                                        Visit Project
                                        <FiExternalLink />
                                    </a>
                                )}
                            </div>

                            <ul className="project-highlights">
                                {project.highlights.map((highlight, index) => (
                                    <li key={index}>
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>

                <div className="projects-image">
                    {projects[activeProject].url ? (
                        <a
                            href={projects[activeProject].url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit ${projects[activeProject].title}`}
                        >
                            <img
                                key={activeProject}
                                src={projects[activeProject].image}
                                alt={`${projects[activeProject].title} preview`}
                            />
                        </a>
                    ) : (
                        <img
                            key={activeProject}
                            src={projects[activeProject].image}
                            alt={`${projects[activeProject].title} preview`}
                        />
                    )}
                </div>

            </div>

        </section>
    );
}

export default Projects;