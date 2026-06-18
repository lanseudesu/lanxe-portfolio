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
            <h3>Plant Disease Detection</h3>
            <p>
              Enhanced ORB for improved disease detection in potato leaves.
            </p>
          </article>
          
          <article className="project-card">
            <h3>T-Rex Assembly Game</h3>
            <p>
              Developed entirely in 8086 Assembly Language using DOSBox.
            </p>
          </article>

          <article className="project-card">
            <h3>Ludus Compiler</h3>
            <p>
              Built a custom programming language with lexer, parser,
              semantic analyzer, and interpreter.
            </p>
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