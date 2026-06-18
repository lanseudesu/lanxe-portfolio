import './Projects.css';
import dinoPic from "../assets/dinosaur.png";

function Projects() {
  return (
    <section className="wrapper projects">
      <h2 className="projects-heading">
        Featured Projects
      </h2>

      <div className="projects-layout">

        <div className="projects-content">
            <article className="project-card">
                <h2 className="project-title">
                    Enhanced ORB for Retinal Image Feature Extraction
                </h2>

                <p className="project-stack">
                    Computer Vision · Undergraduate Thesis · Python
                </p>

                <p className="project-date">
                    2025–2026
                </p>

                <ul className="project-highlights">
                    <li>
                        Enhanced the ORB algorithm using adaptive thresholding, descriptor refinement, and redundancy suppression.
                    </li>

                    <li>
                        Improved keypoint distribution and feature matching accuracy for retinal image analysis.
                    </li>

                    <li>
                        Implemented and evaluated the approach using Python, OpenCV, and NumPy.
                    </li>
                </ul>
            </article>

            <article className="project-card">
                <h2 className="project-title">
                    Ludus Compiler 
                </h2>

                <p className="project-stack">
                    Full-Stack · Language Design · Interpreter · Python
                </p>

                <p className="project-date">
                    2025
                </p>

                <ul className="project-highlights">
                    <li>
                        Developed a custom programming language and compiler.
                    </li>

                    <li>
                        Complete with lexical analysis, parsing, semantic analysis, AST generation, and interpreter execution.
                    </li>

                    <li>
                        Built runtime input handling and compiler tooling using Python, Eel, JavaScript, and HTML/CSS.
                    </li>
                </ul>
            </article>
          
            <article className="project-card">
                <h2 className="project-title">
                    T-Rex Assembly Game
                </h2>

                <p className="project-stack">
                    Game Development · Full-Stack · 8086 Assembly
                </p>

                <p className="project-date">
                    2024
                </p>    

                <ul className="project-highlights">
                    <li>
                        Recreated the Chrome Dinosaur Game entirely in 8086 assembly language using TASM and DOSBox.
                    </li>
    
                    <li>
                        Implemented low-level game mechanics, collision handling, and rendering logic.
                    </li>  
                </ul>
            </article>
        </div>

        <div className="projects-image">
          <img src={dinoPic} alt="Project Preview" />
        </div>

      </div>
    </section>
  );
}

export default Projects;