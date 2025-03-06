const Skills = () => {
    const skills = [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "Bootstrap", level: 85 },
      { name: "React", level: 90 },
      { name: "Python", level: 75 },
    ];
  
    return (
      <section id="skills" className="skills-section">
        <h2 className="section-title">Skills</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill">
              <span className="skill-name">{skill.name}</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Skills;