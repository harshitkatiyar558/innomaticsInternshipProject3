import React from "react";
import harshitImage from "../assets/images/harshit.jpg"; // Import the image

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="intro">
        <img src={harshitImage} alt="Harshit" className="profile-photo" /> {/* Use the imported image */}
        <h1 className="intro-title">Hi, I'm Harshit</h1>
        <p className="intro-subtitle">A passionate Full Stack Developer currently pursuing BTech.</p>
      </div>
    </section>
  );
};

export default Home;