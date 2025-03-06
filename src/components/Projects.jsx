const Projects = () => {
    const projects = [
      {
        title: "Weather App",
        description: "A web application for Weather Information of different places",
        technologies:  ["HTML", "CSS", "JS", "JS API"],
        image: "/src/assets/images/project1.png",
        link: "https://github.com/harshitkatiyar558/weather-app",
      },
      {
        title: "Recipe Finder",
        description: "An Web application for finding the recipe of different foods items",
        technologies: ["HTML", "CSS", "JS", "JS API"],
        image: "/src/assets/images/project2.png",
        link: "https://harshitkatiyar558.github.io/Recipe-Finder/",
      },
      {
        title: "Portfolio Website",
        description: "A portfolio website to showcase my skills and projects.",
        technologies:  ["HTML", "CSS", "JS"],
        image: "/src/assets/images/project3.png",
        link: "https://github.com/harshitkatiyar558/Portfolio-Website",
      },
    ];
  
    return (
      <section id="projects" className="projects-section">
        <h2 className="section-title">Projects</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-details">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-technologies">
                  <strong>Technologies:</strong> {project.technologies.join(", ")}
                </p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;