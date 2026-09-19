import "./Skills.css";

function Skills() {
    const skills = [
        {
            title: "Programming",
            info: "Through my Computer Science studies and personal projects, I've worked with different languages while developing my foundation in OOP, algorithms, and problem solving.",
            items: ["Java", "Python", "C", "JavaScript", "HTML", "SQL", "x86 Assembly", "Flutter"]
        },
        {
            title: "Backend",
            info: "A big part of my development experience has been building the systems behind applications, particularly APIs, databases, authentication, and server-side logic.",
            items: ["Spring Boot", "Django", "ExpressJS", "PostgreSQL", "MySQL", "Firebase", "Supabase"]
        },
        {
            title: "Frontend & Design",
            info: "I enjoy turning ideas into responsive interfaces and connecting them to the underlying backend services to create complete, functional applications.",
            items: ["React", "NextJS", "Tailwind CSS", "CSS", "Figma"]
        },
        {
            title: "Tools & Development Practices",
            info: "I use a range of tools and development practices throughout my projects, from version control and cloud services to team collaboration and Agile development.",
            items: ["Git", "Vercel", "AWS", "Agile", "Scrum"]
        }
    ];

    return (
        <section className="wrapper skills">
            <h2 className="skills-heading">
                Skills
            </h2>

            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div className="skill-box" key={index}>
                        <h3>{skill.title}</h3>

                        <p className="skill-info">
                            {skill.info}
                        </p>

                        <div className="skill-list">
                            {skill.items.map((item, index) => (
                                <span className="skill-item" key={index}>
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;