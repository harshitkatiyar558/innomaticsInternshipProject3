import React from "react";
import project1Image from "../assets/images/project1.png"; // Import the image
import project2Image from "../assets/images/project2.png"; // Import the image
import project3Image from "../assets/images/project3.png"; // Import the image

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A web application for task management.",
      technologies: ["React", "Node.js", "MongoDB"],
      image: project1Image, 
      link: "https://github.com/harshit/project1",
    },
    {
      title: "Project 2",
      description: "An e-commerce website with payment integration.",
      technologies: ["React", "Express", "Stripe"],
      image: project2Image,
      link: "https://github.com/harshit/project2",
    },
    {
      title: "Project 3",
      description: "A portfolio website to showcase my skills and projects.",
      technologies: ["React", "CSS"],
      image: project3Image, 
      link: "https://github.com/harshit/project3",
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