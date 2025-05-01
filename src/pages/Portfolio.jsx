import { useState } from "react";
import Card from "../components/Card.jsx";
import bootstrap from "../assets/bootstrap.png";
import responsive from "../assets/responsive.png";
import genesis from "../assets/genesis.png";
import abstract from "../assets/IMG_2300.jpg";
import "../styles/portfolio.css";

function Portfolio() {
  const [exploreProjects, setExploreProjects] = useState(false);

  const toggleProjects = () => setExploreProjects(prev => !prev);

  return (
    <>
      <div className="toggle-container">
        <img src={abstract} alt="Abstract pic" className="start-img" />
        <p className="card-text">Here’s a selection of projects I created during my time at Sundsgården Folkhögskola. Along the way, I picked up a solid toolbox of web skills—including HTML, CSS, Figma, Git, GitHub, Sass, Bootstrap, JavaScript and React. </p>
        <button onClick={toggleProjects} className="toggle-button">
          {exploreProjects ? "Hide Projects" : "Explore Projects"}
        </button>
      </div>

      <div className="portfolio-section">
        {exploreProjects && (
          <div className="card-container">
            <div>
              <Card
                title="Bootstrap"
                text="A project exploring Bootstrap to quickly build a responsive and styled web page using its component library and layout system."
                tools="HTML, CSS"
                link="https://github.com/kamnyl/bootstrap-project.git"
                cardImg={bootstrap}
              />
            </div>

            <div>
              <Card
                title="Responsive"
                text="A responsive website recreated from a Figma design, focusing on responsive layouts and a functional hamburger menu."
                tools="HTML, CSS"
                link="https://github.com/kamnyl/lesson13.git"
                cardImg={responsive}
              />
            </div>

            <div>
              <Card
                title="CSS Grid"
                text="A multi-page website where CSS Grid was used extensively to create flexible and structured layouts across three pages."
                tools="HTML, CSS"
                link="https://github.com/kamnyl/lesson11.git"
                cardImg={genesis}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Portfolio;
